import React from 'react'
import style from '../../components/home/Home.module.scss'
import container from '../../common/styles/container.module.css'
import ReactTypingEffect from 'react-typing-effect'
import { Link } from 'react-scroll'
//@ts-ignore
import Fade from 'react-reveal/Fade'

export const Home: React.FC = () => {
    return (
        <div className={style.home} id="homeId">
            <div className={`${container.container} ${style.homeContainer}`}>
                <div className={style.textContainer}>
                    <Fade left>
                        <div className={style.title}>
                            Hello, <br />
                            I&apos;m Igor Yarakhovich a <br />
                            <ReactTypingEffect
                                text={[
                                    'Front-end Developer',
                                    'Front-end Engineer',
                                ]}
                            />
                        </div>
                    </Fade>
                    <Link
                        to="aboutId"
                        spy={true}
                        smooth={true}
                        offset={-71}
                        duration={700}
                    >
                        <button className={style.button}>
                            See Who I&apos;m
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
