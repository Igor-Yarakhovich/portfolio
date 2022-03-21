import React from 'react'
import style from './Contacts.module.scss'
import axios from 'axios'
import container from 'common/styles/container.module.css'
import { Title } from 'common/components/title/Title'
import { Formik, Field, Form } from 'formik'

export const Contacts: React.FC = () => {
    return (
        <div className={style.contacts} id="contactId">
            <div
                className={`${container.container} ${style.containerContacts}`}
            >
                <Title name="contacts" />
                <div className={style.info}>Fill out the form to hire me :</div>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: '',
                    }}
                    onSubmit={(values) => {
                        axios
                            .post(
                                'https://smtp-server-email-portfolio.herokuapp.com/sendMessage',
                                {
                                    values,
                                }
                            )
                            .then(() => {
                                alert('Send message')
                            })
                    }}
                >
                    <Form className={style.formContacts}>
                        <Field
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            className={style.input}
                        />
                        <Field
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            className={style.input}
                        />
                        <Field
                            id="message"
                            name="message"
                            placeholder="Message"
                            type="text"
                            className={style.textarea}
                        />
                        <button type="submit" className={style.button}>
                            Send message
                        </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
