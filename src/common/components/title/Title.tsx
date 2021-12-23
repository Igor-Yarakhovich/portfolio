import React from 'react';
import style from './Title.module.scss';

type TitlePropsType = {
    name: string
}

export const Title: React.FC<TitlePropsType> = ({name}) => {
    return (
        <h2 className={style.title}>{name}</h2>
    )
}