import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import HeroImg from '../../assets/Header-Hero.jpg';
import './banner.css';

const Banner = () => {
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 300], [0, -50]);
    const y2 = useTransform(scrollY, [0, 200], [150, -50]);

    return (
        <div className='banner'>
            <motion.img src={HeroImg} style={{ y: y1 }} alt="Hero" />
            {/* <motion.h1 style={{ y: y2 }}>APPLICATION DEVELOPMENT</motion.h1> */}
            <motion.h1
                className="marquee"
                initial={{ x: "50%" }}
                animate={{ x: "-100%" }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                style={{ y: y2, letterSpacing: "20px", fontSize: '4rem', fontWeight: 700, color: "#fff" }}
            >
                <span style={{ paddingRight: "10px" }}>APPLICATION DEVELOPMENT</span>
                <span style={{ paddingRight: "10px" }}>APPLICATION DEVELOPMENT</span>
                <span style={{ paddingRight: "10px" }}>APPLICATION DEVELOPMENT</span>
            </motion.h1>
        </div>
    );
};

export default Banner;
