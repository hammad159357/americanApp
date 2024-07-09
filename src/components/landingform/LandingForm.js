import React from 'react'
import { Row, Col, Form, Input, Button, Select, ConfigProvider } from 'antd';
import mobileImage from '../../assets/mobilecomplete.png'
// import FormGroup from '../../assets/Group.png'
import { motion } from 'framer-motion'
import './LandingForm.css';

const LandingForm = () => {
    const { TextArea } = Input
    return (
        <>
            <div className="two-column-section">
                <Row gutter={[2, 16]} justify="center">
                    {/* Left Column */}
                    <Col xs={24} md={12}>
                        <motion.div initial={{ opacity: 0, x: -50 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 30 }}
                            className="left-column">
                            <h1 >REQUEST FOR<br /> PROPOSAL</h1>
                            <Form layout="vertical" style={{ marginTop: "20px" }}>
                                <Form.Item >
                                    <Input style={{ borderRadius: "15px" }} placeholder="Enter Full Name" />
                                </Form.Item>
                                <Form.Item >
                                    <Input style={{ borderRadius: "15px" }} placeholder="Enter Email Address" />
                                </Form.Item>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Form.Item >
                                            <Input style={{ borderRadius: "15px" }} placeholder="Enter Number" />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item >
                                            <Select className='budget-select' style={{ borderRadius: "15px" }} options={[]} placeholder="Select Budget Range" />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Form.Item >
                                    <TextArea rows={4} placeholder="Enter Description" />
                                </Form.Item>
                                <Form.Item>
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
                                        <Button className='landing-btn' style={{
                                            // backgroundColor: '#30939e', 
                                            borderColor: '#30939e', color: "#fff", padding: '0px 40px', borderRadius: "15px",
                                            width: "200px",
                                            height: "40px",
                                            borderRadius: "27px",
                                            // backgroundImage: " linear-gradient(0deg, #234b54 0%, #369694 100%)",
                                            fontSize: "17px"
                                        }}>Submit</Button>
                                    </ConfigProvider>

                                </Form.Item>
                            </Form>
                        </motion.div>
                    </Col>

                    {/* Right Column */}
                    <Col xs={24} md={12}>
                        <motion.div
                            viewport={{ once: true }}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 30 }}
                            style={{ position: "relative" }} className="right-column">
                            {/* <div style={{ position: "absolute", top: "150px", left: "53px" }}>
                                <img src={FormGroup} alt="Image" />
                            </div> */}
                            <img src={mobileImage} alt="mobileImage" />
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default LandingForm