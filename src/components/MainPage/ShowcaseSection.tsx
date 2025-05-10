import styles from './MainPage.module.scss';
import React from 'react';
import showcase1 from '../../assets/MainpageShowcase1.gif'
import showcase2 from '../../assets/MainpageShowcase2.gif'
import showcase3 from '../../assets/MainpageShowcase3.gif'
import showcase4 from '../../assets/MainpageShowcase4.gif'
const ShowcaseSection = () => {
    return (
        <div className={styles.showcase_section}>
            <iframe className={styles.showcase_video}
                src={showcase1}
                frameborder="0"
            ></iframe>
            <iframe className={styles.showcase_video}
                src={showcase2}
                frameborder="0"
            ></iframe>
            <iframe className={styles.showcase_video}
                src={showcase3}
                frameborder="0"
            ></iframe>
            <iframe className={styles.showcase_video}
                src={showcase4}
                frameborder="0"
            ></iframe>
        </div>
    );
}
export default ShowcaseSection;