import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.main}>
                <div className={styles.about}>
                    <h3 className={styles.title}>
                        關於我們 About
                    </h3>
                    <div className={styles.sidetoside}>
                        <p className={styles.text}>
                            成大 tricking 社｜極限翻滾武技社<br />
                            臺灣第一個 Tricking 社
                        </p>
                        <p className={styles.text}>
                            入門班 |（五）19:30～21:00 成大總圖底下人工草皮<br />
                            進階班 | 洽社團負責人
                        </p>
                    </div>
                </div>
                <div className={styles.contact}>
                    <h3 className={styles.title}>
                        聯絡我們 Contact
                    </h3>
                    <p className={styles.text}>
                        <FaInstagram className={styles.insta} />
                        Instagram @ ncku_tricking
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Footer;
