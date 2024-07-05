import React from 'react'
import { Card, Carousel } from 'antd'
import logo from '../../assets/Header-logo.png'
import { motion } from 'framer-motion'
import './clientReview.css'
const ClientReview = () => {
    const contentStyle = {
        height: '130px',
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const logoStyle = {
        padding: "6px 30px",
        background: "#fff",
        color: "black",
        borderRadius: "8px",
    }
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    const data = [logo, logo, logo, logo, logo]

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                viewport={{ once: true }}
                className='client-section'>
                <h1>WHAT CLIENTS ARE SAYING</h1>
                <h1>ABOUT APPMAKERS</h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                viewport={{ once: true }}
                style={{ marginTop: "-65px" }}>
                <Carousel arrows dots={false}
                    style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto' }}
                    afterChange={onChange}
                >
                    <div>
                        <div style={{ display: "flex", background: 'rgb(194 65 26)', borderRadius: "8px" }}>
                            {data?.map((el, i) => {
                                return (
                                    <>
                                        <div key={i} style={contentStyle}>
                                            <div style={logoStyle}>
                                                <img height='70px' src={el} />
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <div style={{ display: "flex", background: 'rgb(194 65 26)', borderRadius: "8px" }}>
                            {data?.map((el, i) => {
                                return (
                                    <>
                                        <div key={i} style={contentStyle}>
                                            <div style={logoStyle}>
                                                <img height='70px' src={el} />
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </Carousel>
            </motion.div>
        </>
    )
}

export default ClientReview