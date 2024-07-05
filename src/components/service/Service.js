import React, { useState } from 'react'
import { Card, Carousel, Row, Col, Button } from 'antd'
// import logo from '../../assets/Header-logo.png's
import ServiceImg from '../../assets/Service-Image.jpg'
import ServiceText from '../../assets/Service-text-img.jpg'
import { motion } from 'framer-motion'

import './service.css'

const Service = () => {
    const [activeKey, setActiveKey] = useState('ANDROID')
    const contentStyle = {
        // height: '130px',
        flex: 1,
        color: '#fff',
        textAlign: 'center',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const logoStyle = {
        padding: "20px 40px",
        // background: "#fff",
        color: "black",
        borderRadius: "50px",
        border: "1px solid red",
        color: "#black",
        fontWeight: 500,
        cursor: 'pointer'
    }
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    const data = [
        { key: "IPHONE", title1: "IPHONE APP", title2: "DEVELOPMENT" },
        { key: "ANDROID", title1: "ANDROID APP", title2: "DEVELOPMENT" },
        { key: "CUSTOM", title1: "CUSTOM GAME", title2: "DEVELOPMENT" },
    ]
    return (
        <>
            <div className='service-section'>

                <motion.h1
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 30 }}
                >OUR <img height="35px" style={{ borderRadius: "30px" }} src={ServiceText} /> SERVICES</motion.h1>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, }}
                    transition={{ type: "spring", stiffness: 100, damping: 30, duration: 1.5 }}
                    style={{ marginTop: "50px" }}>
                    <Carousel arrows dots={false}
                        style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto' }}
                        afterChange={onChange}
                    >
                        <div>
                            <div style={{ display: "flex", borderRadius: "8px" }}>
                                {data?.map((el) => {
                                    return (
                                        <>
                                            <div key={el?.key} style={contentStyle}>
                                                <div onClick={() => setActiveKey(el?.key)} style={{ ...logoStyle, background: activeKey === el?.key && '#ff4c4c' }}>
                                                    {el?.title1}<br />{el?.title2}
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <div style={{ display: "flex", borderRadius: "8px" }}>
                                {data?.map((el) => {
                                    return (
                                        <>
                                            <div key={el?.key} style={contentStyle}>
                                                <div onClick={() => setActiveKey(el?.key)} style={{ ...logoStyle, background: activeKey === el?.key && '#ff4c4c' }}>
                                                    {el?.title1}<br />{el?.title2}
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </Carousel>
                </motion.div>
                <div style={{ marginTop: "50px" }}>
                    <Row align='middle'>

                        <Col sm={24} md={8} style={{ marginLeft: "155px", textAlign: "right", paddingRight: "30px" }}>
                            <motion.div initial={{ opacity: 0, x: -50 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ type: "spring", stiffness: 100, damping: 30 }}>
                                <img height='250px' style={{ borderRadius: "12px" }} src={ServiceImg} />
                            </motion.div>
                        </Col>
                        <Col sm={24} md={8} style={{ textAlign: "left" }}>
                            <motion.p initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 30 }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </motion.p>
                        </Col>
                    </Row>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 30 }}
                    >

                        <Button style={{ background: "#30939e", color: "#fff", padding: "0px 20px", marginTop: "20px", borderRadius: "20px", borderColor: "#30939e" }}>View More</Button>
                    </motion.div>
                </div>
            </div>

        </>
    )
}

export default Service