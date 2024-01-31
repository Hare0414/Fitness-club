import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import {Route, Routes} from 'react-router-dom'
import { Home } from './views/Home/Home.jsx'
import { About } from './views/About/About.jsx'
import { Gallery } from './views/Gallery/Gallery.jsx'
import { Pricing } from './views/Pricing/Pricing.jsx'
import { Classes} from './views/Classes/Classes.jsx'
import { Contact } from './views/Contact/Contact.jsx'
import './App.module.css'
import { ContactMail } from '@mui/icons-material'


function App() {

    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path='/' element = {<Home />} />
                <Route exact path='/about' element ={ <About />} />
                <Route exact path='/Gallery' element ={ <Gallery />} />
                <Route exact path='/Pricing' element = { <Pricing /> } />
                <Route exact path='/Classes' element = { <Classes /> } />
                <Route exact path='/Contact' element = { <Contact />} />
            </Routes>
        </div>
    )
}
export default App
