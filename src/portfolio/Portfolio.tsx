import React from 'react';
import style from './Portfolio.module.scss'
import {Work} from './work/Work';
import {Title} from '../common/components/title/Title';
import container from '../common/styles/container.module.css';
import todoImages from '../assets/images/best-to-do-list-apps-for-task-management.jpg'
import socialImages from '../assets/images/social-network.png'

export const Portfolio: React.FC = () => {

    const social = {
        backgroundImage: 'url(' + socialImages + ')',
    }
    const todo = {
        backgroundImage: 'url(' + todoImages + ')',
    }

    return (
        <div className={style.portfolio} id='portfolioId'>
            <div className={`${container.container} ${style.containerPortfolio}`}>
                <Title name='portfolio'/>
                <div className={style.works}>
                    <Work title={'Social Network'}
                          description={'This project is a social network, ' +
                          'is my biggest project. The project was written ' +
                          'using React in conjunction with Redux on TypeScript.'}
                          addressUrl={'https://github.com/Igor-Yarakhovich/social_network'}
                          style={social}
                    />
                    <Work title={'Todo List'}
                          description={'Lorem ipsum dolor sit amet,' +
                          ' consectetur adipisicing elit, ' +
                          'sed do eiusmod tempor incididunt ut ' +
                          'labore et dolore magna aliqua.'}
                          addressUrl={'https://github.com/Igor-Yarakhovich/TodoList'}
                          style={todo}
                    />
                </div>
            </div>
        </div>
    )
}