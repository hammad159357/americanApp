import React from 'react'
import { Row, Col, Form, Input, Button, Select } from 'antd';
import mobileImage from '../../assets/mobilecomplete.png'
// import FormGroup from '../../assets/Group.png'
import './LandingForm.css';

const LandingForm = () => {
    return (
        <>
            <div className="two-column-section">
                <Row gutter={[2, 16]} justify="center">
                    {/* Left Column */}
                    <Col xs={24} md={12}>
                        <div className="left-column">
                            <h1>Request for proposal</h1>
                            <Form layout="vertical">
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
                                    <Input style={{ height: "50px", borderRadius: "15px" }} placeholder="Enter Description" />
                                </Form.Item>
                                <Form.Item>
                                    <Button style={{
                                        backgroundColor: '#706FE5', color: "#fff", padding: '0px 40px', borderRadius: "15px"
                                    }}>Submit</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>

                    {/* Right Column */}
                    <Col xs={24} md={12}>
                        <div style={{ position: "relative" }} className="right-column">
                            {/* <div style={{ position: "absolute", top: "150px", left: "53px" }}>
                                <img src={FormGroup} alt="Image" />
                            </div> */}
                            <img src={mobileImage} alt="mobileImage" />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default LandingForm