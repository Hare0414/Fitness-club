import React from 'react'
import styles from './Contact.module.css'
import { ToastContainer } from 'react-toastify'
import { useInput } from '../../hooks/useInput'

export const Contact = () => {
    const { input, handleChange, handleNotification } = useInput()

    return (
        <div className={styles.main}>
            <div className={styles.leftContainer}>
                <h2>We are here for help you! To Shape Your Body</h2>
                <p>
                    At Gym as, we are didicated to helping you achieve the body
                    of your dreams. Our export trainer and nutritionists will
                    work with you to create a personalized and nutrition plan
                    that helps you reach your specific goals.
                </p>
                <div className={styles.containerInfo}>
                    <div className={styles.infoTop}>
                        <h3>Guanajuato, MEX</h3>
                        <p>
                            85 Juarez Street, <br /> Center,E1 8LG, MEX
                        </p>
                    </div>
                    <div className={styles.infoTop}>
                        <h3>Opening Hours</h3>
                        <p>
                            Mon to Fri: 7:00 am - 21:00 pm
                            <br /> Saturday: 7:00 am - 19:00 pm
                        </p>
                    </div>
                    <div className={styles.infoBottom}>
                        <h3>Information</h3>
                        <p>
                            +800-123-4567 <br />
                            gymas@gmail.com
                        </p>
                    </div>
                    <div className={styles.icons}>
                        <h3>Follow Us On</h3>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://as-work.vercel.app/">
                            <i className="bx bx-desktop" />
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/antonio-silva-developer/">
                            <i className="bx bxl-linkedin" />
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/Asilvazavala">
                            <i className="bx bxl-github" />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.rightContainer}>
                <form
                    id="form"
                    action="https://formsubmit.co/rhysloun@gmail.com"
                    method="POST">
                    <h3>Leave Us Your Info</h3>
                    <input
                        onChange={(e) => handleChange(e)}
                        value={input.name}
                        required
                        type="text"
                        name="name"
                        id="name"
                        placeholder="your name..."
                    />
                    <input
                        onChange={(e) => handleChange(e)}
                        value={input.email}
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="youremail@gmail.com..."
                    />
                    <textarea
                        onChange={(e) => handleChange(e)}
                        value={input.message}
                        required
                        name="message"
                        id="message"
                        placeholder="Your appreciate comment..."
                    />
                    <div>
                        <button
                            className={styles.buttonSubmit}
                            onClick={handleNotification}
                            type="submit">
                            Submit Now
                        </button>
                    </div>

                    <input
                        type="hidden"
                        name="_next"
                        value="https://gym-as.vercel.app/contact"
                    />
                    <input
                        type="hidden"
                        name="_autoresponse"
                        value="Gracias por tu mensaje, te responderé en breve."
                    />
                    <ToastContainer />
                </form>
            </div>
        </div>
    )
}
