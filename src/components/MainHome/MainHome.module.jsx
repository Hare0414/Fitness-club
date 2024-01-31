import React from 'react'
import styles from './MainHome.module.css'
import { NavLink } from 'react-router-dom'

export const MainHome = () => {
    return (
        <div>
            <section className={styles.home}>
                <div className={styles.homeContent}>
                    <h1>Train Different</h1>
                    <h3>Body Fit & Perfect</h3>
                    <div className={styles.btnBox}>
                        <NavLink to="/classes">
                            <span href="/classes">Our</span>
                        </NavLink>
                    </div>
                </div>
                <div className={styles.homeSci}>
                    <a
                        href="http://as-work.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"></a>
                    <a
                        href="http://www.linkedin.com/in/serviusapolum"
                        target="_blank"
                        rel="noopener noreferrer"></a>
                    <a
                        href="http://github.com/rhys0414"
                        target="_blank"
                        rel="noopener noreferrer"></a>
                </div>
            </section>
        </div>
    )
}
