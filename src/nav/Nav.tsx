import React from 'react';
import style from './Nav.module.scss'

export const Nav: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.nav}>
                <a className={style.button} href={'#homeId'}>HOME</a>
                <a className={style.button} href={'#aboutId'}>ABOUT US</a>
                <a className={style.button} href={'#skillsId'}>SKILLS</a>
                <a className={style.button} href={'#portfolioId'}>PORTFOLIO</a>
                <a className={style.button} href={'#contactId'}>CONTACTS</a>
            </div>
        </div>
    )
}