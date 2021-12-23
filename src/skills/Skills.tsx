import React from 'react';
import style from './Skills.module.scss';
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/title/Title";
import container from "../common/styles/container.module.css";

export const Skills: React.FC = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${container.container} ${style.containerSkills}`}>
                <Title name='skills'/>
                <div className={style.skills}>
                    <Skill title={"HTML"}
                           description={"Lorem ipsum dolor sit amet," +
                           " consectetur adipisicing elit, " +
                           "sed do eiusmod tempor incididunt ut " +
                           "labore et dolore magna aliqua."}
                    />
                    <Skill title={"CSS"}
                           description={"Lorem ipsum dolor sit amet," +
                           " consectetur adipisicing elit, " +
                           "sed do eiusmod tempor incididunt ut " +
                           "labore et dolore magna aliqua."}
                    />
                    <Skill title={"JavaScript"}
                           description={"Lorem ipsum dolor sit amet," +
                           " consectetur adipisicing elit, " +
                           "sed do eiusmod tempor incididunt ut " +
                           "labore et dolore magna aliqua."}
                    />
                    <Skill title={"TypeScript"}
                           description={"Lorem ipsum dolor sit amet," +
                           " consectetur adipisicing elit, " +
                           "sed do eiusmod tempor incididunt ut " +
                           "labore et dolore magna aliqua."}
                    />
                    <Skill title={"React"}
                           description={"Lorem ipsum dolor sit amet," +
                           " consectetur adipisicing elit, " +
                           "sed do eiusmod tempor incididunt ut " +
                           "labore et dolore magna aliqua."}
                    />
                    <Skill title={"Redux"}
                           description={"Lorem ipsum dolor sit amet," +
                           " consectetur adipisicing elit, " +
                           "sed do eiusmod tempor incididunt ut " +
                           "labore et dolore magna aliqua."}
                    />
                </div>
            </div>
        </div>
    )
}