import React from 'react'
import style from './Contacts.module.scss'
import { Title } from '../../common/components/title/Title'
import container from '../../common/styles/container.module.css'

export const Contacts: React.FC = () => {
    return (
        <div className={style.contacts} id="contactId">
            <div
                className={`${container.container} ${style.containerContacts}`}
            >
                <Title name="contacts" />
                <form className={style.formContacts}>
                    <input
                        type="text"
                        placeholder="Name"
                        className={style.input}
                    />
                    <input
                        type="text"
                        placeholder="e-mail"
                        className={style.input}
                    />
                    <textarea
                        placeholder="Message"
                        className={style.textarea}
                    />
                    <button type="submit" className={style.button}>
                        Send message
                    </button>
                </form>
            </div>
        </div>
    )
}
