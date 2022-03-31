import React from 'react';
import BaseLayout from "../layouts/Base";
import useLegislation from "../hooks/useLegislation";
import data from '../data/all.json';

const Updates = () => {
    const {loading, error, legislation, moreLegislation} = useLegislation(1, 15);
    console.log(legislation.length);
    console.log(
        data.filter(l => {
            return l.LongTitleEn.includes('digital divide')
        }).length
    )

    return (
        <BaseLayout>
            {legislation && legislation.map((l, index) => {
                return <div key={`${index}`}>{l.name}</div>
            })}
        </BaseLayout>
    )
};

export default Updates;
