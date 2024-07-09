import { Button, ConfigProvider } from 'antd'
import React from 'react'
import HeaderLogo from '../../assets/Header-logo.png'
import { motion } from 'framer-motion'
import { PhoneOutlined } from '@ant-design/icons';
import phone from '../../assets/phone.svg'
import './header.css'

const Header = () => {
    return (
        <>
            <div className='header'>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 30 }}
                ><img height='80px' src={HeaderLogo} /></motion.div>
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
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 30 }}
                        className='header-list'>
                        <ul>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Our Works</li>
                            <li>Contact Us</li>
                            <li>

                                {/* <Button style={{ background: "#30939e", color: "#fff", borderRadius: "20px", borderColor: "#30939e" }}>123 456 7890</Button> */}
                                <Button className='list-btn' style={{
                                    // backgroundColor: '#30939e',
                                    borderColor: '#30939e', color: "#fff", padding: '0px 20px', borderRadius: "15px",
                                    // width: "200px",
                                    height: "38px",
                                    borderRadius: "27px",
                                    // backgroundImage: " linear-gradient(0deg, #234b54 0%, #369694 100%)",
                                    fontSize: "18px",
                                    lineHeight: "29px",
                                    fontWeight: 400,
                                }}
                                    icon={<img src={phone} />}
                                >123 456 7890</Button>
                            </li>
                        </ul>
                    </motion.div>
                </ConfigProvider>
            </div>

        </>
    )
}

export default Header