import React from 'react';
import style from './Header.module.scss'
import {Nav} from "../nav/Nav";

export const Header: React.FC = () => {
    return (
        <div className={style.header}>
            <Nav />
        </div>
    )
}