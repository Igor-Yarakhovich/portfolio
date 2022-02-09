import React from 'react';
import style from './Home.module.scss'
import container from './../common/styles/container.module.css'
import {Button} from "../common/components/button/button";

export const Home: React.FC = () => {
    return (
        <div className={style.home} id='homeId'>
            <div className={`${container.container} ${style.homeContainer}`}>
                <div className={style.textContainer}>
                    <div className={style.title}>
                        Hello, <br/>
                        I'm Igor Yarakhovich a <br/>
                        Front-end Developer <br/>
                    </div>
                    <Button name={'See Who I\'m'}/>
                </div>
            </div>
        </div>
    )
}