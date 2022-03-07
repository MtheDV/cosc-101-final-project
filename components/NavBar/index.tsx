import Link from 'next/link';
import React from 'react';
import styles from './NavBar.module.scss';
import Logo from "../Logo";

const NavBar = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <Link href={'/'}>
                        <a><Logo/></a>
                    </Link>
                </li>
                <li>
                    <Link href={'/updates'}>
                        <a>Updates</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
