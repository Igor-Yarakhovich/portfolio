import React from 'react';
import style from './AboutUs.module.scss'
import {Title} from "../common/components/title/Title";
import container from "../common/styles/container.module.css";

export const AboutUs: React.FC = () => {
    return (
        <div className={style.aboutUs}>
            <div className={`${container.container} ${style.aboutUsContainer}`}>
                <Title name='about us'/>
                <div className={style.content}>
                    <div className={style.photo}>photo</div>
                    <div className={style.info}>info</div>
                </div>
            </div>
        </div>
    )
}