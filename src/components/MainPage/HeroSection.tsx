import styles from './MainPage.module.scss';
import Dot from './Dot/Dot.tsx'
import React, { useState, useEffect } from 'react';
import img1 from '../../assets/MainpageHeroBackground1.jpg';
import img2 from '../../assets/MainpageHeroBackground2.jpg';

const images = [img1, img2, img1, img2];

const HeroSection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length);
        }, 5000); // 輪換間隔
        return () => clearInterval(timer);
    }, []);

    return (
        <div
            style={{
                width: '100%',
                height: '45.417vw',
                top: '73px',
                backgroundImage: `url(${images[index]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 0.5s',
                display: 'flex'
            }}
        >
            <div>
                <h1 className={styles.hero_intro}>
                    NCKU Tricking CLUB<br />
                    翻轉你的小宇宙
                </h1>
                <button className={styles.hero_button}>說明文字</button>
            </div>
            <div className={styles.carousel_dots}>
                {Array.from({ length: images.length }).map((_, idx) => (
                    <Dot
                        key={idx}
                        active={idx === index}
                        onClick={() => setIndex(idx)}
                    />
                ))}
            </div>
        </div >
    );
}

export default HeroSection;