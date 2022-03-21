import React, { useState } from 'react'
import style from './Contacts.module.scss'
import axios from 'axios'
import container from 'common/styles/container.module.css'
import { Title } from 'common/components/title/Title'
import { useFormik } from 'formik'
import { RequestStatusType } from 'types/RequestStatusType'
import { Preloader } from 'common/components/preloader/Preloader'
import { CheckEmail } from 'components/contacts/checkEmail/checkEmail'

type FormikErrorType = {
    name?: string
    email?: string
    message?: string
}

export const Contacts: React.FC = () => {
    let [status, setStatus] = useState<RequestStatusType>('idle')

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required email address'
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address'
            }

            if (!values.name) {
                errors.name = 'Required enter name'
            }

            if (!values.message) {
                errors.message = 'Required enter message'
            }

            return errors
        },
        onSubmit: (values) => {
            setStatus('loading')
            axios
                .post(
                    'https://smtp-server-email-portfolio.herokuapp.com/sendMessage',
                    {
                        values,
                    }
                )
                .then(() => {
                    setStatus('succeeded')
                })
        },
    })

    const validateEmailHandler = formik.touched.email &&
        formik.errors.email && (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
        )

    const validateNameHandler = formik.touched.name && formik.errors.name && (
        <div style={{ color: 'red' }}>{formik.errors.name}</div>
    )

    const validateMessageHandler = formik.touched.message &&
        formik.errors.message && (
            <div style={{ color: 'red' }}>{formik.errors.message}</div>
        )

    if (status === 'loading') {
        return <Preloader />
    }

    if (status === 'succeeded') {
        return <CheckEmail />
    }

    return (
        <div className={style.contacts} id="contactId">
            <div
                className={`${container.container} ${style.containerContacts}`}
            >
                <Title name="contacts" />
                <div className={style.info}>Fill out the form to hire me :</div>
                <form
                    onSubmit={formik.handleSubmit}
                    className={style.formContacts}
                >
                    <input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className={style.input}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {validateNameHandler}
                    <input
                        id="email"
                        name="email"
                        placeholder="Email"
                        className={style.input}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {validateEmailHandler}
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Message"
                        className={style.textarea}
                        onChange={formik.handleChange}
                        value={formik.values.message}
                    />
                    {validateMessageHandler}
                    <button type="submit" className={style.button}>
                        Send message
                    </button>
                </form>
            </div>
        </div>
    )
}
