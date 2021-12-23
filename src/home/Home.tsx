import React from 'react';
import style from './Home.module.scss'
import container from './../common/styles/container.module.css'

export const Home : React.FC = () => {
    return (
        <div className={style.home} id='homeId'>
            <div className={`${container.container} ${style.homeContainer}`}>
                <div className={style.textContainer}>
                    <h1 className={style.title}>Hello,</h1>
                    <h1 className={style.title}>I'm Igor Yarakhovich a </h1>
                    <h1 className={style.title}>Front-end Developer</h1>
                </div>
            </div>
        </div>
    )
}