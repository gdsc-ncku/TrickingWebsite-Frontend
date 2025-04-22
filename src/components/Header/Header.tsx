import styles from './Header.module.scss';
import Navbar from './Navbar/Navbar';
import { FaInfoCircle, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.left_options}>
                <Navbar />
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
            <div className={styles.logo}>
                LOGO
            </div>
            <div className={styles.right_options}>
                <button className={styles.button}>
                    <FaInfoCircle />
                </button>
                <button className={styles.button}>
                    <FaShoppingCart />
                </button>
                <button className={styles.button}>
                    <FaUser />
                </button>
            </div>
        </div>
    );
}
export default Header;
