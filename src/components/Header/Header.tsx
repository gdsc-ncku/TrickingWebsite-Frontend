import styles from './Header.module.scss';
import Navbar from './Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { FaInfoCircle, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.header}>
            <div className={styles.left_options}>
                <Navbar />
                <button className={styles.button} onClick={() => navigate('/')}>
                    首頁
                </button>
                <button className={styles.button}>
                    課程
                </button>
                <button className={styles.button}>
                    課卡
                </button>
                <button className={styles.button} onClick={() => navigate('/tricktionary')}>
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
                <button className={styles.button} onClick={() => navigate('/shop')}>
                    <FaShoppingCart />
                </button>
                <button className={styles.button} onClick={() => navigate('/login')}>
                    <FaUser />
                </button>
            </div>
        </div>
    );
}
export default Header;
