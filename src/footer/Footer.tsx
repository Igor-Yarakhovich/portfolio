import React from 'react';
import style from './Footer.module.css'
import {Title} from "../common/components/title/Title";


export const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <Title name='igor yarakhovich'/>
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