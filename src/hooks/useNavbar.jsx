import { useState, useEffect } from 'react'

export const useNavbar = () => {
    const goTop = () => {
        window.scrollTo({
            top: 0,
        })
    }

    const [showNavbar, setShowNavbar] = useState(false)
    const showNav = () => {
        setShowNavbar(!showNavbar)
    }

    const [isSmallScreen, setSmallScreen] = useState(false)
    useEffect(() => {
        function handleResize() {
            setSmallScreen(window.innerWidth < 800)
        }
        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const closeNavbar = () => {
        if (isSmallScreen) showNav()
    }
    return { goTop, closeNavbar, isSmallScreen, showNavbar, showNav }
}
