import React from 'react';
import style from './Footer.module.css'
import {Title} from "../common/components/title/Title";
import container from "../common/styles/container.module.css";


export const Footer: React.FC = () => {
    return (
        <div className={style.footer}>
            <div className={`${container.container} ${style.containerFooter}`}>
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