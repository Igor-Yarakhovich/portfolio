import React from 'react'
import email from 'assets/images/Email-PNG-Photo.png'
import style from './checkEmail.module.scss'

export const CheckEmail: React.FC = () => {
    return (
        <div className={style.emailContainer}>
            <img className={style.images} src={email} alt="email" />
            <div className={style.text}>
                Thank you for your interest in my person, I will definitely
                contact you.
            </div>
        </div>
    )
}
