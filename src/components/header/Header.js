import { Button } from 'antd'
import React from 'react'
import HeaderLogo from '../../assets/Header-logo.png'
import './header.css'

const Header = () => {
    return (
        <>
            <div className='header'>
                <div><img height='80px' src={HeaderLogo} /></div>
                <div className='header-list'>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Our Works</li>
                        <li>Contact Us</li>
                        <li><Button style={{ background: "#30939e", color: "#fff", borderRadius: "20px", borderColor: "#30939e" }}>123 456 78</Button></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Header