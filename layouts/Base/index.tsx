import React from 'react';
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import styles from './Base.module.scss';

const BaseLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <main className={styles.container}>{children}</main>
            <Footer />
        </div>
    )
};

export default BaseLayout;
