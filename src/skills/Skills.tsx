import React from 'react';
import style from './Skills.module.css';
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={style.container}>
                <h2 className={style.title}>SKILLS</h2>
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