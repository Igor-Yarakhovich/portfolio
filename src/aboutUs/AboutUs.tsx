import React from 'react';
import style from './AboutUs.module.css'

export const AboutUs = () => {
    return (
        <div className={style.aboutUs}>
            <div className={style.container}>
                <div className={style.photo}></div>
                <div className={style.info}></div>
            </div>
        </div>
    )
}