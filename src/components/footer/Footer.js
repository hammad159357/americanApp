import React from 'react'
// import { Link } from 'react-router-dom'
// import logo from '../../assets/footerlogo.png'
import logo from '../../assets/Logo-footer.png'
import { FaEnvelope, FaPhone, FaLocationArrow } from 'react-icons/fa';
import { Row, Col, Container } from 'react-bootstrap';
import { motion } from 'framer-motion'
import './footer.css'


const Footer = () => {
    return (
        <footer className='footer_custom'>
            <Container>
                <Row>
                    <Col sm={6} md={3}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 30 }}
                            viewport={{ once: true }}
                            className='column col1'>
                            <div className='theme_logo'>
                                <img src={logo} />
                            </div>
                            {/* <p>For further queries: </p> */}

                            {/* <ul className='contact_list'> */}
                            {/* <li><a href='mailto:bluuhealthcare@gmail.com'><FaEnvelope /> bluuhealthcare@gmail.com</a></li> */}
                            {/* <li><a href='tel:480-275-3106'><FaPhoneAlt /> 480-275-3106</a></li>
               <li><FaMapMarkerAlt /> 617 East Avenue Tempe, AZ 85282</li>*/}
                            {/* </ul> */}
                        </motion.div>
                    </Col>
                    <Col sm={6} md={3}>
                        <motion.div initial={{ opacity: 0, x: -200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 30 }} className='column links padding-left'>
                            <h3>QUICK LINKS</h3>

                            <ul>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>About Us</a></li>
                                <li><a href='#'>Services</a></li>
                                <li><a href='#'>Our Works</a></li>
                                <li><a href='#'>Contact Us</a></li>
                            </ul>
                        </motion.div>
                    </Col>
                    <Col sm={6} md={3}>
                        <motion.div initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, damping: 30 }} className='column links padding-left'>
                            <h3>USEFUL LINKS</h3>
                            <ul>
                                <li style={{ color: 'white' }}>FAQ's</li>
                                <li style={{ color: 'white' }}>Privacy Policy</li>
                                <li style={{ color: 'white' }}>Terms of Condition</li>
                            </ul>
                        </motion.div>
                    </Col>
                    <Col sm={6} md={3}>
                        <motion.div initial={{ opacity: 0, x: 50 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 30 }} className='column links padding-left'>
                            <h3 style={{ color: "#fff" }}>CONTACT US</h3>
                            <ul>
                                <li><a href='example@gmail.com'><FaPhone /> 123 456 789</a></li>
                                <li><a href='example@gmail.com'><FaEnvelope /> example@gmail.com</a></li>
                                <li><a href='example@gmail.com'><FaLocationArrow /> Street 5</a></li>
                            </ul>

                        </motion.div>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <div className='footer__bottom_bar'>
                            <ul>
                                {/* <li><a href='#'>Privacy Policy</a></li>
                                <li><a href='#'>Terms & Conditions</a></li> */}
                            </ul>
                            {/* <h3>Bluu Health © 2023</h3> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer