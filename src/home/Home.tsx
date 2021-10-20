import React from 'react';
import style from './Home.module.css'

export const Home = () => {
    return (
        <div className={style.home}>
            <div className={style.container}>
                <div className={style.text}>
                    <h1>Hello,</h1>
                    <h1>I'm Igor Yarakhovich a </h1>
                    <h1>Front-end Developer</h1>
                </div>
            </div>
        </div>
    )
}