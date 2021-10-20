import React from 'react';
import style from './Footer.module.css'


export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <h2 className={style.title}>IGOR YARAKHOVICH</h2>
                <div className={style.social}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <div className={style.footerText}>
                    <p>© 2021 All rights reserved</p>
                </div>
            </div>
        </div>
    )
}