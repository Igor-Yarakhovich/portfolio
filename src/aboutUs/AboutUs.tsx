import React from 'react';
import style from './AboutUs.module.scss'
import {Title} from "../common/components/title/Title";
import container from "../common/styles/container.module.css";
import myPhoto from '../assets/images/myPhoto.jpg'

export const AboutUs: React.FC = () => {
    return (
        <div className={style.aboutUs} id='aboutId'>
            <div className={`${container.container} ${style.aboutUsContainer}`}>
                <Title name='about us'/>
                <div className={style.content}>
                    <div className={style.photo}><img src={myPhoto} alt=''/></div>
                    <div className={style.info}>
                        I’m a Front-end developer with experience in creating SPA,
                        using React, Redux, HTML, CSS, JS. Now I am improving my
                        skills in this direction and expanding them with new technologies.
                        My free time is dedicated to Codewars and improving my English.
                        Would like to find project work in a company with a modern approach
                        to development and a collaborative team.I am ready for both full
                        and part-time employment on a project, ready to work in the office
                        or remotely.Open to your suggestions.
                    </div>
                </div>
            </div>
        </div>
    )
}