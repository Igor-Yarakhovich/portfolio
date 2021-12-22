import React from 'react';
import style from './Contacts.module.css'
import {Title} from "../common/components/title/Title";
import container from "../common/styles/container.module.css";


export const Contacts: React.FC = () => {
    return (
        <div className={style.contacts}>
            <div className={`${container.container} ${style.containerContacts}`}>
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