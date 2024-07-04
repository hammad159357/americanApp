import React from 'react'
// import { Link } from 'react-router-dom'
// import logo from '../../assets/footerlogo.png'
import { FaFacebook, FaInstagram, FaEnvelope, } from 'react-icons/fa';
import { Row, Col, Container } from 'react-bootstrap';
import './footer.css'


const Footer = () => {
    return (
        <footer className='footer_custom'>
            <Container>
                <Row>
                    <Col sm={6} md={3}>
                        <div className='column col1'>
                            <div className='theme_logo'>
                                <img src={''} />
                            </div>
                            <p>For further queries: </p>

                            <ul className='contact_list'>
                                <li><a href='mailto:bluuhealthcare@gmail.com'><FaEnvelope /> bluuhealthcare@gmail.com</a></li>
                                {/* <li><a href='tel:480-275-3106'><FaPhoneAlt /> 480-275-3106</a></li>
               <li><FaMapMarkerAlt /> 617 East Avenue Tempe, AZ 85282</li>*/}
                            </ul>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className='column links padding-left'>
                            <h3>Quick Links</h3>

                            <ul>
                                <li><a to='/faq'>FAQs</a></li>
                                <li><a to='/careers'>Careers</a></li>
                                <li><a to='/subscription'>Join BluuHealth</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className='column links padding-left'>
                            <h3>Our Services</h3>

                            <ul>
                                <li style={{ color: 'white' }}>Individual</li>
                                <li style={{ color: 'white' }}>Couples</li>
                                <li style={{ color: 'white' }}>Family</li>
                                <li style={{ color: 'white' }}>Adolescence</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className='column contact padding-left'>
                            <h3 style={{ color: "#fff" }}>For Latest Updates</h3>
                            <div className='contact_no'>
                                <div className='number_block'>
                                    <FaFacebook />
                                    <FaInstagram />
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <div className='footer__bottom_bar'>
                            <ul>
                                <li><a href='#'>Privacy Policy</a></li>
                                <li><a href='#'>Terms & Conditions</a></li>
                            </ul>
                            <h3>Bluu Health © 2023</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer