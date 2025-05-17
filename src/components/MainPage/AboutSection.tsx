import styles from './MainPage.module.scss';
import React, { useState, useEffect } from 'react';

const AboutSection = () => {

    const tricking_about_video_src = "https://www.youtube.com/embed/cevKK6uuCfU";
    return (
        <div className={styles.about_section}>
            <div className={styles.about_text}>
                <h2 className={styles.about_title}>
                    What is Tricking? _
                </h2>
                <p className={styles.about_subtitle}>
                    Tricking = Taekwondo + Gymnastics Flips + Breaking
                </p>
                <p className={styles.about_content}>
                    More accurately,<br />
                    Tricking is an extreme sport that combines elements of gymnastics,<br />
                    martial arts, and breaking. Its main elements include flips, kicks,<br />
                    twists, and ground movements. It is presented in a fluid and visually<br />
                    impactful manner.
                </p>
            </div>


            <iframe className={styles.about_video}
                src={tricking_about_video_src}
                frameBorder="0"
            ></iframe>


        </div >
    );
}

export default AboutSection;