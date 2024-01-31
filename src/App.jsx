import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import {Route, Routes} from 'react-router-dom'
import { Home } from './views/Home/Home.jsx'
import { About } from './views/About/About.jsx'
import { Gallery } from './views/Gallery/Gallery.jsx'
import './App.module.css'


function App() {

    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path='/' element = {<Home />} />
                <Route exact path='/about' element ={ <About />} />
                <Route exact path='/Gallery' element ={ <Gallery />} />
            </Routes>
        </div>
    )
}
export default App
