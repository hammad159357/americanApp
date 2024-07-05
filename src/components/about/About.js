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
                        <motion.span
                            viewport={{ once: true }}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 30 }}
                        >Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</motion.span>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 30 }}
                        viewport={{ once: true }}
                    >
                        <span>Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum ipsumLorem ipsum ipsumLorem ipsum ipsumLorem ipsum ipsumLorem ipsum ipsumLorem ipsum ipsumLorem ipsum ipsumLorem ipsum ipsumLorem ipsum ipsumLorem ipsum ipsumLorem ipsum ipsumLorem ipsum ipsumLorem ipsum ipsumLorem ipsum ipsumLorem ipsum ipsumLorem ipsum ipsumLorem ipsum ipsumLorem ipsum </span>
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default About