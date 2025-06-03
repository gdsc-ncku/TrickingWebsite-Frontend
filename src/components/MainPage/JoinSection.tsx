import styles from './MainPage.module.scss';
import React from 'react';

const JoinSection = () => {
    return (
        <div className={styles.join_section}>
            <h1 className={styles.join_title}>
                如何加入我們？
            </h1>
            <p className={styles.join_content}>
                Norem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam eu turpis molestie, dictum est a, mattis tellus.
                Sed dignissim, metus nec fringilla accumsan, risus sem
                sollicitudin lacus, ut interdum tellus elit sed risus.
                Maecenas eget condimentum velit, sit amet feugiat lectus.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
            </p>
            <button className={styles.join_button} >sadas</button>
        </div>
    );
}
export default JoinSection;