import styles from './Header.module.scss';
import Navbar from './Navbar/Navbar';
import { Link } from 'react-router-dom';
import { FaInfoCircle, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.left_options}>
                <Navbar />
                <Link to="/" className={styles.button}>
                    首頁
                </Link>
                <button className={styles.button}>
                    課程
                </button>
                <button className={styles.button}>
                    課卡
                </button>
                <Link to="/tricktionary" className={styles.button}>
                    招式庫
                </Link>
            </div>
            <div className={styles.logo}>
                LOGO
            </div>
            <div className={styles.right_options}>
                <button className={styles.button}>
                    <FaInfoCircle />
                </button>
                <Link to="/shop" className={styles.button}>
                    <FaShoppingCart />
                </Link>
                <Link to="/login" className={styles.button}>
                    <FaUser />
                </Link>
            </div>
        </div>
    );
}
export default Header;
