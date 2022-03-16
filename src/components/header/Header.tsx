import React from 'react'
import style from 'components/header/Header.module.scss'
import { Nav } from 'components/header/nav/Nav'
import { BurgerNav } from 'components/header/burgerNav/BurgerNav'

export const Header: React.FC = () => {
    return (
        <div className={style.header}>
            <Nav />
            <BurgerNav />
        </div>
    )
}
