import React from 'react'
import './App.css'

import { Home } from 'components/home/Home'
import { AboutUs } from 'components/aboutUs/AboutUs'
import { Skills } from 'components/skills/Skills'
import { Portfolio } from 'components/portfolio/Portfolio'
import { Contacts } from 'components/contacts/Contacts'
import { Footer } from 'components/footer/Footer'
import { Header } from 'components/header/Header'

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <AboutUs />
            <Skills />
            <Portfolio />
            <Contacts />
            <Footer />
        </div>
    )
}

export default App
