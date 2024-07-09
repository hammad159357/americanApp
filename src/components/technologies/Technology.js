import React from 'react'
import { Card, Carousel } from 'antd'
import logo from '../../assets/Header-logo.png'
import logocontainer from '../../assets/Layer20.svg'
import { motion } from 'framer-motion'
import Slider from "react-slick";
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
    const settings = {
        dots: true,

        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",

    };
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
                    style={{ marginTop: "20px", maxWidth: "600px", marginLeft: 'auto', marginRight: 'auto' }}>
                    {/* <Carousel
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
                    </Carousel> */}
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div>
                                <div ><img height='120px' src={logocontainer} /></div>
                            </div>
                            <div>
                                <div ><img height='120px' src={logocontainer} /></div>
                            </div>
                            <div>
                                <div ><img height='120px' src={logocontainer} /></div>
                            </div>

                            {/* {data?.map((el, i) => {
                                return (
                                    <div key={i} style={contentStyle}>
                                        <div style={logoStyle}>
                                            <img height='70px' src={el} />
                                        </div>
                                    </div>

                                )
                            })} */}

                        </Slider>
                    </div>
                </motion.div>
            </div>

        </>
    )
}

export default Technology