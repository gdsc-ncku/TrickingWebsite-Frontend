import styles from './MainPage.module.scss';
import React from 'react';
import location_icon from '../../assets/location_icon.svg'
import calendar_icon from '../../assets/calendar_icon.svg'
const ClassSection = () => {
    return (
        <div className={styles.class_section}>
            <div className={styles.entry_class}>
                <h1 className={styles.entry_title}>
                    入門班
                </h1>
                <div className={styles.entry_class_info}>
                    <img src={calendar_icon} className={styles.icon} />
                    <p className={styles.entry_text_left}>(五)   19:30～21:00</p>

                    <img src={location_icon} className={styles.icon} />
                    <p className={styles.entry_text_right}>成大總圖底下人工草皮</p>
                </div>
                <p className={styles.entry_introduction_left}>
                    Norem ipsum dolor sit amet, consectetur
                    adipiscing elit. Etiam eu turpis molestie,
                    dictum est a, mattis tellus. Sed dignissim,
                    metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed
                    risus. Maecenas eget condimentum velit, sit
                    amet feugiat lectus.
                </p>
            </div>
            <div className={styles.entry_class}>
                <h1 className={styles.entry_title}>
                    進階班
                </h1>
            </div>
        </div >
    );
}

export default ClassSection;