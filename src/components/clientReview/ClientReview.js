import React, { useRef } from 'react'
import { Card, Carousel, Button, ConfigProvider } from 'antd'
import svg1 from '../../assets/svg1.svg'
import svg2 from '../../assets/svg2.svg'
import svg3 from '../../assets/svg3.svg'
import svg4 from '../../assets/svg4.svg'
import svg5 from '../../assets/svg5.svg'
import logo from '../../assets/Header-logo.png'

import { motion } from 'framer-motion'
import LeftArrowIcon from '../../assets/icons/LeftArrow'
import RightArrowIcon from '../../assets/icons/RightArrow'
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
    const data = [svg1, svg2, svg3, svg4, svg5]
    const slider = useRef(null)

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
                <div className='client-underline'></div>
            </motion.div>
            <motion.div
                className='client-slider'
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                viewport={{ once: true }}
                style={{ marginTop: "-60px" }}>
                <ConfigProvider
                    theme={{
                        components: {
                            Button: {
                                lineWidth: 0,
                                defaultHoverBg: "linear-gradient(180deg, #d0040f 0%, #f5b404 100%)",
                                defaultHoverColor: "linear-gradient(180deg, #d0040f 0%, #f5b404 100%)"
                            },
                        },
                    }}
                >
                    <Carousel draggable={true} arrows dots={false} ref={slider}
                        nextArrow={<>
                            <Button shape="circle"
                                icon={<RightArrowIcon />}
                                className='client-rightarrow'
                                onClick={() => slider.current.next()} /></>}

                        prevArrow={<>
                            <Button shape="circle"
                                icon={<LeftArrowIcon />}
                                className='client-leftarrow'

                                onClick={() => slider.current.prev()} /></>}
                        style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto' }}
                        afterChange={onChange}
                    >

                        <div>
                            <div style={{ display: "flex", background: 'linear-gradient(0deg, #b93126 0%, #e3582c 100%)', borderRadius: "8px" }}>
                                {data?.map((el, i) => {
                                    return (
                                        <>
                                            <div key={i} style={contentStyle}>
                                                <div style={logoStyle}>
                                                    <img width='70px' height='70px' src={el} />
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
                                                    <img width='70px' height='70px' src={el} />
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </Carousel>
                </ConfigProvider>

            </motion.div>
        </>
    )
}

export default ClientReview