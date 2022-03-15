import React from 'react'
import styles from './Work.module.scss'

export type WorkPropsType = {
    title: string
    description: string
    addressUrl: string
    style: {
        backgroundImage: string
    }
}

export const Work: React.FC<WorkPropsType> = ({
    title,
    description,
    addressUrl,
    style,
}) => {
    return (
        <div className={styles.work}>
            <div className={styles.workContainer}>
                <div className={styles.icon} style={style}>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={addressUrl}
                        className={styles.button}
                    >
                        WATCH
                    </a>
                </div>
                <h3 className={styles.workTitle}>{title}</h3>
                <span className={styles.description}>{description}</span>
            </div>
        </div>
    )
}
