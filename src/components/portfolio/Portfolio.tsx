import React from 'react'
import style from './Portfolio.module.scss'
import { Work } from 'components/portfolio/work/Work'
import { Title } from 'common/components/title/Title'
import container from 'common/styles/container.module.css'
import todoImages from 'assets/images/best-to-do-list-apps-for-task-management.jpg'
import socialImages from 'assets/images/social-network.png'
import filmsImages from 'assets/images/filmsSearch.jpg'
import cardsImages from 'assets/images/Cards.jpg'
//@ts-ignore
import Fade from 'react-reveal/Fade'

export const Portfolio: React.FC = () => {
    const social = {
        backgroundImage: 'url(' + socialImages + ')',
    }
    const todo = {
        backgroundImage: 'url(' + todoImages + ')',
    }
    const films = {
        backgroundImage: 'url(' + filmsImages + ')',
    }
    const cards = {
        backgroundImage: 'url(' + cardsImages + ')',
    }

    return (
        <div className={style.portfolio} id="portfolioId">
            <div
                className={`${container.container} ${style.containerPortfolio}`}
            >
                <Title name="portfolio" />
                <Fade clear>
                    <div className={style.works}>
                        <Work
                            title={'Social Network'}
                            description={
                                'This project is a social network, ' +
                                'is my biggest project. The project was written ' +
                                'using React in conjunction with Redux on TypeScript.'
                            }
                            addressUrl={
                                'https://github.com/Igor-Yarakhovich/social_network'
                            }
                            style={social}
                        />
                        <Work
                            title={'Todo List'}
                            description={
                                'Task management application. ' +
                                'You can add tasks, as well as sort and group them.'
                            }
                            addressUrl={
                                'https://github.com/Igor-Yarakhovich/TodoList'
                            }
                            style={todo}
                        />
                        <Work
                            title={'Movie Search'}
                            description={
                                'SPA to search for movies, ' +
                                'use www.omdbapi.com api to get movies.'
                            }
                            addressUrl={
                                'https://github.com/Igor-Yarakhovich/films'
                            }
                            style={films}
                        />
                        <Work
                            title={'Cards'}
                            description={
                                'This project helps to study with flash cards. ' +
                                'Joint project, a team of 3 people. Technologies that used ' +
                                'here : TypeScript,React, Redux, Redux-thunk, Hooks, Axios.'
                            }
                            addressUrl={
                                'https://github.com/Igor-Yarakhovich/cards'
                            }
                            style={cards}
                        />
                    </div>
                </Fade>
            </div>
        </div>
    )
}
