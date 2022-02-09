import React from 'react';
import styles from './button.module.scss'

type ButtonPropsType = {
    name: string
}

export const Button: React.FC<ButtonPropsType> = ({name}) => {
    return (
        <a href={'#aboutId'} className={styles.button}>{name}</a>
    )
}