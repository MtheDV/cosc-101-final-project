import {useEffect, useState} from 'react'
import axios from 'axios';

export default function useLegislation(page, resultsEach) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [legislation, setLegislation] = useState([])
    const [moreLegislation, setMoreLegislation] = useState(false)

    const processLegislation = (legislation) => {
        return {
            name: legislation.name.en
        }
    }

    useEffect(() => {
        setLoading(true)
        setError(false)
        axios({
            method: 'GET',
            url: 'https://www.parl.ca/legisinfo/en/bills/json?parlsession=Parliament-Session',
            params: {page: page, limit: resultsEach}
        }).then(res => {
            setLegislation(existingLegislation => {
                return [...existingLegislation, ...res.data.objects.map(l => processLegislation(l))]  // TODO: modify
            })
            setMoreLegislation(res.data.results.length > 0)  // TODO: modify
            setLoading(false)
        }).catch(e => {
            setError(true)
        })
    }, [page, resultsEach])

    return {loading, error, legislation, moreLegislation}
}
