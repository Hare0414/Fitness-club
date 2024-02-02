import React from "react";
import styles from './Activites.module.com'
import { NavLink } from "react-router-dom";
import { useNavbar } from "../../hooks/useNavbar";

export const Activites = () =>{
    const { goTop } = useNavbar()

    return (
        <div className={styles.main}>
            <h1>CLASSES EVERY HOUR</h1>
            <NavLink to= '/classes' onClick={goTop}>
                <div className={ styles.cardsContainer }>
                    <div className="styles.card1">
                        <h2>Crossfit</h2>
                        <span>Monday: 9:00am-10:00am</span>
                    </div>

                    <div className="styles.card2">
                        <h2>Karate</h2>
                        <span>Friday: 10:00am-11:00am</span>
                    </div>

                    <div className="styles.card3">
                        <h2>Boxing</h2>
                        <span>Tuesday: 11:00am-12:00am</span>
                    </div>
                </div>

                <div className={styles.cardsContainer}>
                    <div className="styles.card4">
                        <h2>Cycling</h2>
                        <span>Wednesday: 9:00am-10:00am</span>
                    </div>
                    <div className="styles.card5">
                        <h2>Running</h2>
                        <span>Friday: 1:00pm-2:00pm</span>
                    </div>
                    <div className="styles.card6">
                        <h2>Yoga</h2>
                        <span>Saturday: 6:00pm-7:00pm</span>
                    </div>
                </div>
            </NavLink>
        </div>
    )

}
