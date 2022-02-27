import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>Logo</li>
                <li>Updates</li>
                <li>Petitions</li>
            </ul>
        </nav>
    );
};

export default NavBar;
