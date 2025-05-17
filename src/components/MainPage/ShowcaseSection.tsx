import styles from './MainPage.module.scss';
import React from 'react';
import showcase1 from '../../assets/MainPageShowcase1.gif'
import showcase2 from '../../assets/MainPageShowcase2.gif'
import showcase3 from '../../assets/MainPageShowcase3.gif'
import showcase4 from '../../assets/MainPageShowcase4.gif'
const ShowcaseSection = () => {
    return (
        <div className={styles.showcase_section}>
            <iframe className={styles.showcase_video}
                src={showcase1}
                frameBorder="0"
            ></iframe>
            <iframe className={styles.showcase_video}
                src={showcase2}
                frameBorder="0"
            ></iframe>
            <iframe className={styles.showcase_video}
                src={showcase3}
                frameBorder="0"
            ></iframe>
            <iframe className={styles.showcase_video}
                src={showcase4}
                frameBorder="0"
            ></iframe>
        </div>
    );
}
export default ShowcaseSection;