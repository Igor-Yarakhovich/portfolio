import React from 'react'
import style from './Footer.module.scss'

import container from '../../common/styles/container.module.css'
import lindeInIcon from '../../assets/iconSocial/icons8-linkedin-circled-250.png'
import gitHub from '../../assets/iconSocial/icons8-github-250.png'
import codeWars from '../../assets/iconSocial/1586249_codewars_icon.png'
import VK from '../../assets/iconSocial/icons8-vk-circled-250.png'
import { Title } from '../../common/components/title/Title'

export const Footer: React.FC = () => {
    return (
        <div className={style.footer}>
            <div className={`${container.container} ${style.containerFooter}`}>
                <Title name="igor yarakhovich" />
                <div className={style.social}>
                    <div className={style.icon}>
                        <a
                            href="https://www.linkedin.com/in/игорь-ярохович-57ab671b6"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={lindeInIcon} alt="" />
                        </a>
                    </div>
                    <div className={style.icon}>
                        <a
                            href="https://github.com/Igor-Yarakhovich"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={gitHub} alt="" />
                        </a>
                    </div>
                    <div className={style.icon}>
                        <a
                            href="https://www.codewars.com/users/Igor_Yarokhovich"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={codeWars} alt="" />
                        </a>
                    </div>
                    <div className={style.icon}>
                        <a
                            href="https://vk.com/igoryarohovich"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={VK} alt="" />
                        </a>
                    </div>
                </div>
                <div className={style.footerText}>
                    <p>© 2021 All rights reserved by Igor Yarakhovich</p>
                </div>
            </div>
        </div>
    )
}
