import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Home} from "./home/Home";
import {AboutUs} from "./aboutUs/AboutUs";
import {Skills} from "./skills/Skills";
import {Portfolio} from "./portfolio/Portfolio";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Home/>
            <AboutUs/>
            <Skills/>
            <Portfolio/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
