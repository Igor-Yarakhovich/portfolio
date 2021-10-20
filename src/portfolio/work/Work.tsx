import React from 'react';
import style from './Work.module.css'

export type WorkPropsType = {
    title:string
    description:string
}

export const Work = (props:WorkPropsType) => {
    return (
        <div className={style.work}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
            <button className={style.button}>WATCH</button>
        </div>
    )
}