import React from 'react';
import style from './Portfolio.module.css'
import {Work} from "./work/Work";
import {Title} from "../common/components/title/Title";
import container from "../common/styles/container.module.css";

export const Portfolio : React.FC = () => {
    return (
        <div className={style.portfolio}>
            <div className={`${container.container} ${style.containerPortfolio}`}>
                <Title name='portfolio'/>
                <div className={style.works}>
                    <Work title={"Social Network"}
                          description={"Lorem ipsum dolor sit amet," +
                          " consectetur adipisicing elit, " +
                          "sed do eiusmod tempor incididunt ut " +
                          "labore et dolore magna aliqua."}
                    />
                    <Work title={"Todo List"}
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