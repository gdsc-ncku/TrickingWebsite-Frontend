import React from 'react'
import styles from './Dot.module.scss'

function Dot({ active, onClick }) {
    let dotClasses = styles.dot;
    if (active) {
        dotClasses = `${styles.dot} ${styles.active}`;
    }
    return (
        <div
            className={dotClasses}
            onClick={onClick}
        />


    )
}

export default Dot;