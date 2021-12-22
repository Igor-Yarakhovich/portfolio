import React from 'react';
import style from './Work.module.css'

export type WorkPropsType = {
    title: string
    description: string
}

export const Work: React.FC<WorkPropsType> = ({title, description}) => {
    return (
        <div className={style.work}>
            <div className={style.workContainer}>
                <div className={style.icon}>
                    <button className={style.button}>WATCH</button>
                </div>
                <h3 className={style.workTitle}>{title}</h3>
                <span className={style.description}>{description}</span>
            </div>
        </div>
    )
}