import React from 'react';
import style from './Skill.module.scss'

export type SkillPropsType = {
    title: string
    description: string
    img?:any
}

export const Skill: React.FC<SkillPropsType> = ({title, description, img}) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>{img}</div>
            <div className={style.title}>{title}</div>
            <span className={style.description}>{description}</span>
        </div>
    )
}