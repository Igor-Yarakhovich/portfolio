import React from 'react';
import style from './Header.module.scss'
import {Nav} from "./nav/Nav";
import {BurgerNav} from "./burgerNav/BurgerNav";

export const Header: React.FC = () => {
    return (
        <div className={style.header}>
            <Nav />
            <BurgerNav/>
        </div>
    )
}