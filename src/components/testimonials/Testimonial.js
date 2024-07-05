import React from 'react'
import { Card, Carousel } from 'antd'

import './testimonial.css'

const Testimonial = () => {
    const contentStyle = {
        // margin: 0,
        // color: '#fff',
        // lineHeight: '160px',
        // textAlign: 'center',
        // marginLeft: "auto",
        // marginRight: "auto",
        // padding: '0px 50px',
        // width: "70%",
        // background: '#364d79',
    };
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <>
            <div className='testimonial-section'>
                <h1>TESTIMONIALS FROM </h1>
                <h1>OUR CLIENTS</h1>
                {/* <Card style={{ width: "70%" }}>
                    <div className='testimonial-card'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
                        <h4>CEO APPROACH</h4>
                        <p>Lorem ipsum</p>
                    </div>
                </Card> */}
                {/* <Carousel style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }} afterChange={onChange}> */}
                <Carousel autoplay
                    style={{ width: '70%', marginLeft: 'auto', marginRight: 'auto' }}
                    afterChange={onChange}
                >
                    <div>
                        <Card style={contentStyle}>
                            <div className='testimonial-card'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
                                <h4>CEO APPROACH</h4>
                                <p>Lorem ipsum</p>
                            </div>
                        </Card>
                    </div>
                    <div>
                        <Card style={contentStyle}>
                            <div className='testimonial-card'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release .</p>
                                <h4>CEO APPROACH</h4>
                                <p>Lorem ipsum</p>
                            </div>
                        </Card>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Testimonial