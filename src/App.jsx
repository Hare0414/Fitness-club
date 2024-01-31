import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import {Route, Routes} from 'react-router-dom'
import { Home } from './views/Home/Home.jsx'
import './App.module.css'
import { formGroupClasses } from '@mui/material'

function App() {

    return (
        <div>
            <Navbar />
            <Routes>
                <Route exact path='/' element = {<Home />} />
            </Routes>
        </div>
    )
}
export default App
