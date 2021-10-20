import React from 'react';
import style from './Nav.module.css'

export const Nav = () => {
    return (
        <div className={style.container}>
            <div className={style.nav}>
                <a href=''>HOME</a>
                <a href=''>ABOUT US</a>
                <a href=''>SKILLS</a>
                <a href=''>PORTFOLIO</a>
                <a href=''>CONTACTS</a>
            </div>
        </div>
    )
}