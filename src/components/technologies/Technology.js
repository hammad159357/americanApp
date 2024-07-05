import React from 'react'
import { Card, Carousel } from 'antd'
import logo from '../../assets/Header-logo.png'
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
                <h1>TECHNOLOGIES WE</h1>
                <h1>WORK WITH</h1>
                <div style={{ marginTop: "20px" }}>
                    <Carousel autoplay
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
                </div>
            </div>

        </>
    )
}

export default Technology