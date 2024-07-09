import React, { useState, useRef } from 'react'
import { Card, Carousel, Row, Col, Button, ConfigProvider } from 'antd'
// import logo from '../../assets/Header-logo.png's
import ServiceImg from '../../assets/Service-Image.jpg'
import ServiceText from '../../assets/Service-text-img.jpg'
import aiImg from '../../assets/ai.jpg'
import RightArrowIcon from '../../assets/icons/ServiceRightArrow'
import LeftArrowIcon from '../../assets/icons/ServiceLeftArrow'
// import RightArrowIcon from '../../assets/icons/RightArrow'
import { motion } from 'framer-motion'

import './service.css'

const Service = () => {
    const slider = useRef(null)
    const [activeKey, setActiveKey] = useState('')
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
        color: "black",
        borderRadius: "50px",
        border: "2px solid red",
        color: "#black",
        fontWeight: 500,
        cursor: 'pointer',
        fontWeight: 600
    }
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    const data = [
        { key: "IPHONE", title1: "IPHONE APP", title2: "DEVELOPMENT" },
        { key: "ANDROID", title1: "ANDROID APP", title2: "DEVELOPMENT" },
        { key: "CUSTOM", title1: "CUSTOM GAME", title2: "DEVELOPMENT" },
    ]
    const data2 = [
        { key: "GRAPHIC", title1: "GRAPHIC", title2: "DESIGNING" },
        { key: "SEO", title1: "SEO APP", title2: "OPTIMIZATION" },
        { key: "MARKETING", title1: "EMAIL", title2: "MARKETING" },
    ]

    const content = {
        IPHONE: { key: "IPHONE", image: ServiceImg, content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.` },
        ANDROID: { key: "ANDROID", image: aiImg, content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.` },
        CUSTOM: { key: "CUSTOM", image: ServiceImg, content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.` },
        GRAPHIC: { key: "GRAPHIC", image: aiImg, content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.` },
        SEO: { key: "SEO", image: ServiceImg, content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.` },
        MARKETING: { key: "MARKETING", image: aiImg, content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.` },
    }

    return (
        <>
            <div className='service-section'>

                <motion.div className='service-first-container'
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 30 }}
                >OUR <img width="193px" height="48px" style={{ borderRadius: "30px" }} src={ServiceText} /> SERVICES</motion.div>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, }}
                    transition={{ type: "spring", stiffness: 100, damping: 30, duration: 1.5 }}
                    style={{ marginTop: "50px" }}>
                    <Carousel arrows dots={false}
                        ref={slider}
                        // style={{ width: '60%', marginLeft: 'auto', marginRight: 'auto' }}
                        nextArrow={<>
                            <Button shape="circle"
                                icon={<RightArrowIcon />}
                                style={{ border: "none", background: "transparent", top: "-55px", right: "-400px", transform: "rotate(180deg)", zIndex: 10 }}

                                onClick={() => slider.current.next()} /></>}

                        prevArrow={<>
                            <Button shape="circle"
                                icon={<LeftArrowIcon />}
                                style={{ border: "none", background: "transparent", top: "55px", left: "-400px", zIndex: 10 }}
                                onClick={() => slider.current.prev()} /></>}
                    >
                        <div>
                            <div className='service-slider' style={{ display: "flex", borderRadius: "8px" }}>
                                {data?.map((el) => {
                                    return (
                                        <>
                                            <div key={el?.key} style={contentStyle}>
                                                <div className='silder-hover' onClick={() => setActiveKey(el?.key)} style={{ ...logoStyle, backgroundImage: activeKey === el?.key && 'linear-gradient(0deg, #ff2921 0%, #e3582c 100%)' }}>
                                                    {el?.title1}<br />{el?.title2}
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <div className='service-slider' style={{ display: "flex", borderRadius: "8px" }}>
                                {data2?.map((el) => {
                                    return (
                                        <>
                                            <div key={el?.key} style={contentStyle}>
                                                <div className='silder-hover' onClick={() => setActiveKey(el?.key)} style={{ ...logoStyle, backgroundImage: activeKey === el?.key && 'linear-gradient(0deg, #ff2921 0%, #e3582c 100%)' }}>
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
                                // viewport={{ once: true }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ type: "spring", stiffness: 100, damping: 30 }}>
                                <img height='250px' width='250px' style={{ borderRadius: "12px" }} src={content[activeKey]?.image || content['ANDROID']?.image} />
                            </motion.div>
                        </Col>
                        <Col sm={24} md={8} style={{ textAlign: "left" }}>
                            <motion.p className='service-paragraph' initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                // viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 100, damping: 30 }}>
                                {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
                                {content[activeKey]?.content || content['ANDROID']?.content}
                            </motion.p>
                        </Col>
                    </Row>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 30 }}
                    >
                        <ConfigProvider
                            theme={{
                                components: {
                                    Button: {
                                        defaultHoverBg: "linear-gradient(180deg, #d0040f 0%, #f5b404 100%)",
                                        defaultHoverColor: "linear-gradient(180deg, #d0040f 0%, #f5b404 100%)"
                                    },
                                },
                            }}
                        >
                            <Button className='service-button'>View More</Button>
                        </ConfigProvider>
                    </motion.div>
                </div>
            </div>

        </>
    )
}

export default Service