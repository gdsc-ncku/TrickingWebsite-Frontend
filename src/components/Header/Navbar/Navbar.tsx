import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import { FaBars, FaTimes, FaInfoCircle, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className={styles.navbar}>
                <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </nav>
            <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
                <button className={styles.button}>
                    首頁
                </button>
                <button className={styles.button}>
                    課程
                </button>
                <button className={styles.button}>
                    課卡
                </button>
                <button className={styles.button}>
                    招式庫
                </button>
            </div>
        </>
    );
};

export default Navbar;
