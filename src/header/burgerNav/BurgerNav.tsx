import React, {useState} from 'react';
import style from './BurgerNav.module.scss'
import {Link} from "react-scroll";

export const BurgerNav: React.FC = () => {

    // let menuIsOpen = false;
    // const onBurgerBtnClick = () => {
    //     menuIsOpen = !menuIsOpen
    //     console.log(menuIsOpen)
    // }
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const menuHandler = () => setMenuIsOpen(!menuIsOpen)
    return (
        <div className={style.container}>
            <div className={style.burgerNav}>
                <div className={menuIsOpen ? style.burgerNavItems + ' ' + style.show : style.burgerNavItems}>
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
                <div onClick={menuHandler} className={style.burgerButton}/>
            </div>
        </div>
    )
}