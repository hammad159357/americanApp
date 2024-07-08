import React from 'react'
import { Card, Carousel } from 'antd'
import logo from '../../assets/Header-logo.png'
import { motion } from 'framer-motion'
import './technology.css'
const Technology = () => {
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
        padding: "20px 40px",
        // background: "black",
        color: "#fff",
        borderRadius: "8px",
    }
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    const data = [logo, logo, logo, logo, logo]
    return (
        <>
            <div className='technology-section'>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 30 }}
                >
                    <h1>TECHNOLOGIES WE</h1>
                    <h1>WORK WITH</h1>
                </motion.div>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 30 }}
                    style={{ marginTop: "20px" }}>
                    <Carousel
                        style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto' }}
                        afterChange={onChange}
                    >
                        <div>
                            <div style={{ display: "flex", borderRadius: "8px" }}>
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
                            <div style={{ display: "flex", borderRadius: "8px" }}>
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
            </div>

        </>
    )
}

export default Technology