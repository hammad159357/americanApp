import React from 'react'
import { motion } from 'framer-motion'
import './about.css'

const About = () => {
    return (
        <>
            <div className='about'>
                <div style={{ textAlign: "left", padding: "30px 280px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "10px" }}>
                        <motion.h1
                            viewport={{ once: true }}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 30 }}
                            style={{ whiteSpace: "nowrap" }}>ABOUT US</motion.h1>
                        <motion.p
                            viewport={{ once: true }}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 30 }}
                        >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 30 }}
                        viewport={{ once: true }}
                    >
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default About