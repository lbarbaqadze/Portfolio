'use client'
import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1000,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div className={styles.containerSix} id='contact' >
            <h1 data-aos="fade-down" className={styles.h1}>Contact Me <FontAwesomeIcon icon={faEnvelopeOpenText}
            style={{fontSize: "28px"}}
            /></h1>
            <form
                className={styles.contactForm}
                action="https://formspree.io/f/mldolkaz"
                method="POST"
                onSubmit={() => setSubmitted(true)}
                data-aos="fade-up"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    data-aos="fade-right"
                    data-aos-delay="100"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    data-aos="fade-right"
                    data-aos-delay="200"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                    data-aos="fade-right"
                    data-aos-delay="300"
                ></textarea>

                <button
                    type="submit"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                >
                    Send
                </button>

                {submitted && (
                    <p
                        className={styles.success}
                        data-aos="fade-in"
                        style={{ marginTop: '10px', color: '#0f0' }}
                    >
                        Your message has been sent!
                    </p>
                )}
            </form>
        </div>
    );
}
