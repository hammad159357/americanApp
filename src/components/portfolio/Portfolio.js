import React, { useState } from 'react'
import { Row, Tabs, Col } from 'antd'
import portfolio1 from '../../assets/portfolio1.jpg'
import portfolio2 from '../../assets/portfolio2.jpg'
import portfolio3 from '../../assets/portfolio3.jpg'
import portfolio4 from '../../assets/portfolio4.png'
import portfolio5 from '../../assets/portfolio5.jpg'
import portfolio6 from '../../assets/portfolio6.jpg'
import portfolio7 from '../../assets/portfolio7.jpg'
import portfolio8 from '../../assets/portfolio8.jpg'
import './portfolio.css'
import { motion } from 'framer-motion'

import PortfolioImgSection from './overview/PortfolioImgSection'

const Portfolio = () => {
    const [activekey, setActivekey] = useState('FASIONAPP')
    const onChange = (key) => {
        setActivekey(key)
    };
    const tabsImage = {
        FASIONAPP: [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6, portfolio7, portfolio8],
        GAMEAPP: [portfolio5, portfolio6, portfolio7, portfolio8, portfolio1, portfolio2, portfolio3, portfolio4],
        RESTAURANTAPP: [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6, portfolio7, portfolio8],
        CLEANINGAPP: [portfolio5, portfolio6, portfolio7, portfolio8, portfolio1, portfolio2, portfolio3, portfolio4],
    }
    const items = [
        {
            key: 'FASIONAPP',
            label: 'Fashion App',
            children: <PortfolioImgSection data={tabsImage[activekey]} />,
        },
        {
            key: 'GAMEAPP',
            label: 'Game App',
            children: <PortfolioImgSection data={tabsImage[activekey]} />,
        },
        {
            key: 'RESTAURANTAPP',
            label: 'Restaurant App',
            children: <PortfolioImgSection data={tabsImage[activekey]} />
        },
        {
            key: 'CLEANINGAPP',
            label: 'Cleaning App',
            children: <PortfolioImgSection data={tabsImage[activekey]} />
        },
    ];

    return (
        <>
            <div className='portfolio-section'>
                <motion.h1
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 30 }}
                >OUR PORTFOLIO</motion.h1>
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 30 }}
                >
                    <Tabs de tabBarGutter={48} centered defaultActiveKey="FASIONAPP" items={items} onChange={onChange} />
                </motion.div>
            </div>
        </>
    )
}

export default Portfolio