import React from 'react'
import style from './Skills.module.scss'
import { Skill } from '../../components/skills/skill/Skill'
import { Title } from '../../common/components/title/Title'
import container from '../../common/styles/container.module.css'
import reactImage from '../../assets/icon/icons8-react-200.png'
import reduxImage from '../../assets/icon/icons8-redux-240.png'
import javaScriptImage from '../../assets/icon/JavaScript.png'
import typeScriptImage from '../../assets/icon/typescript.png'
import RestAPIImage from '../../assets/icon/restAPI.png'
import axiosImage from '../../assets/icon/Axios-logo.png'
import gitHubImage from '../../assets/icon/github.png'
import MUIImage from '../../assets/icon/icons8-material-ui-240.png'
import StoryBookImage from '../../assets/icon/storyBook.png'
import TestingImage from '../../assets/icon/testing.png'
import HTMLImage from '../../assets/icon/html.png'
import CSSImage from '../../assets/icon/css.png'
//@ts-ignore
import Fade from 'react-reveal/Fade'

export const Skills: React.FC = () => {
    const react = <img src={reactImage} alt="" />
    const redux = <img src={reduxImage} alt="" />
    const javaScript = <img src={javaScriptImage} alt="" />
    const typeScript = <img src={typeScriptImage} alt="" />
    const RestAPI = <img src={RestAPIImage} alt="" />
    const axios = <img src={axiosImage} alt="" />
    const gitHub = <img src={gitHubImage} alt="" />
    const MUI = <img src={MUIImage} alt="" />
    const StoryBook = <img src={StoryBookImage} alt="" />
    const Testing = <img src={TestingImage} alt="" />
    const HTML = <img src={HTMLImage} alt="" />
    const CSS = <img src={CSSImage} alt="" />

    return (
        <div className={style.skillsBlock} id="skillsId">
            <div className={`${container.container} ${style.containerSkills}`}>
                <Title name="skills" />
                <Fade clear>
                    <div className={style.skills}>
                        <Skill
                            title={'React'}
                            description={
                                'JavaScript library for building ' +
                                'user interfaces or UI components.'
                            }
                            img={react}
                        />
                        <Skill
                            title={'Redux'}
                            description={
                                'JavaScript library for managing ' +
                                'application state.'
                            }
                            img={redux}
                        />
                        <Skill
                            title={'JavaScript'}
                            description={
                                'Programming language that conforms ' +
                                'to the ECMAScript specification.'
                            }
                            img={javaScript}
                        />
                        <Skill
                            title={'TypeScript'}
                            description={
                                'Strict syntactical superset of ' +
                                'JavaScript and adds optional static typing to the language.'
                            }
                            img={typeScript}
                        />
                        <Skill
                            title={'Rest API'}
                            description={
                                'It is an application programming ' +
                                'interface that conforms to the constraints ' +
                                'architectural style and allows for interaction ' +
                                'with web services.'
                            }
                            img={RestAPI}
                        />
                        <Skill
                            title={'Axios'}
                            description={
                                'Axios is a JavaScript library for ' +
                                'making either HTTP requests in Node. js or XMLHttpRequests ' +
                                'in the browser.'
                            }
                            img={axios}
                        />
                        <Skill
                            title={'GitHub'}
                            description={
                                'The largest web service for hosting ' +
                                'IT projects and their joint development.'
                            }
                            img={gitHub}
                        />
                        <Skill
                            title={'Material UI'}
                            description={
                                'One of the most popular ' +
                                'react component libraries!'
                            }
                            img={MUI}
                        />
                        <Skill
                            title={'Story Book'}
                            description={'Tool for UI development!'}
                            img={StoryBook}
                        />
                        <Skill
                            title={'Unit testing & TDD'}
                            description={
                                'This is a software testing method in ' +
                                'which individual blocks of computer software modules ' +
                                'of the source code are checked for suitability for use.'
                            }
                            img={Testing}
                        />
                        <Skill
                            title={'HTML'}
                            description={
                                'HTML is a standardized document ' +
                                'markup language for viewing web pages in a browser.'
                            }
                            img={HTML}
                        />
                        <Skill
                            title={'CSS'}
                            description={
                                'CSS is a formal language for describing ' +
                                'the appearance of a document written using a markup language.'
                            }
                            img={CSS}
                        />
                    </div>
                </Fade>
            </div>
        </div>
    )
}
