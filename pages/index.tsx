import React from 'react';
import BaseLayout from "../layouts/Base";
import Link from "next/link";

const Home = () => {
    return (
        <BaseLayout>
            Content
            <br/>
            <Link href={'/resources'}>
                <a>Resources</a>
            </Link>
            <br/>
            <Link href={'/about'}>
                <a>About</a>
            </Link>
        </BaseLayout>
    )
};

export default Home;
