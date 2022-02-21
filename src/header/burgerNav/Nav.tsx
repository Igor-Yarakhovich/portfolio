import React from 'react';
import style from './Nav.module.scss'
import {Link} from "react-scroll";

export const Nav: React.FC = () => {
    return (
        <div className={style.container}>
            <div className={style.nav}>
                <Link activeClass={style.active}
                      className={style.button}
                      to="homeId"
                      spy={true}
                      smooth={true}
                      offset={-71}
                      duration={700}
                >HOME</Link>

                <Link activeClass={style.active}
                      className={style.button}
                      to="aboutId"
                      spy={true}
                      smooth={true}
                      offset={-71}
                      duration={700}
                >ABOUT US</Link>

                <Link activeClass={style.active}
                      className={style.button}
                      to="skillsId"
                      spy={true}
                      smooth={true}
                      offset={-71}
                      duration={700}
                >SKILLS</Link>

                <Link activeClass={style.active}
                      className={style.button}
                      to="portfolioId"
                      spy={true}
                      smooth={true}
                      offset={-71}
                      duration={700}
                >PORTFOLIO</Link>

                <Link activeClass={style.active}
                      className={style.button}
                      to="contactId"
                      spy={true}
                      smooth={true}
                      offset={-71}
                      duration={700}
                >CONTACTS</Link>
            </div>
        </div>
    )
}