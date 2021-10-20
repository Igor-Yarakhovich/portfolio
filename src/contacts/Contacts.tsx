import React from 'react';
import style from './Contacts.module.css'


export const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={style.container}>
                <h2 className={style.title}>CONTACTS</h2>
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