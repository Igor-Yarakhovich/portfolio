import React from 'react';
import style from './Contacts.module.css'
import {Title} from "../common/components/title/Title";


export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={style.container}>
                <Title name='contacts'/>
                <form className={style.formContacts}>
                    <input/>
                    <input/>
                    <textarea/>
                </form>
                <button>
                    SEND
                </button>
            </div>
        </div>
    )
}