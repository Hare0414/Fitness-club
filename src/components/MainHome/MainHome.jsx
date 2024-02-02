import React from 'react'
import styles from './MainHome.module.css'
import { CardsAdvantage } from '../CardsAdvantage/CardsAdvantage'
import { NavLink } from 'react-router-dom'

export const MainHome = () => {
    return (
        <div>
            <div>
                <section className={styles.home}>
                    <div className={styles.homeContent}>
                        <h1>Train Different</h1>
                        <h3>Body Fit & Perfect</h3>
                        <div className={styles.btnBox}>
                            <NavLink to="/classes">
                                <span href="/classes">Our classes</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className={styles.homeSci}>
                        <a
                            href="http://as-work.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer">
                                <i className='bx bx-desktop'></i>
                            </a>
                        <a
                            href="http://www.linkedin.com/in/serviusapolum"
                            target="_blank"
                            rel="noopener noreferrer">
                                <i className='bx bxl-linkedin' />
                            </a>
                        <a
                            href="http://github.com/rhys0414"
                            target="_blank"
                            rel="noopener noreferrer">
                                <i className='bx bxl-github' />
                            </a>
                    </div>
                </section>
            </div>
            <CardsAdvantage />
        </div>
    )
}
