import { Button } from 'antd'
import React from 'react'
import HeaderLogo from '../../assets/Header-logo.png'
import { motion } from 'framer-motion'
import './header.css'

const Header = () => {
    return (
        <>
            <div className='header'>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 30 }}
                ><img height='80px' src={HeaderLogo} /></motion.div>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 30 }}
                    className='header-list'>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Our Works</li>
                        <li>Contact Us</li>
                        <li><Button style={{ background: "#30939e", color: "#fff", borderRadius: "20px", borderColor: "#30939e" }}>123 456 78</Button></li>
                    </ul>
                </motion.div>
            </div>

        </>
    )
}

export default Header