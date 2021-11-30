import React from 'react';
import style from './AboutUs.module.css'
import {Title} from "../common/components/title/Title";

export const AboutUs = () => {
    return (
        <div className={style.aboutUs}>
            <div className={style.container}>
                <Title name='about us'/>
                <div className={style.content}>
                    <div className={style.photo}></div>
                    <div className={style.info}></div>
                </div>
            </div>
        </div>
    )
}