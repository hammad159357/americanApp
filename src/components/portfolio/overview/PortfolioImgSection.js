import React from 'react'
import { Row, Col } from 'antd'
import { motion } from 'framer-motion'
const PortfolioImgSection = ({ data }) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
            >
                <Row gutter={[16, 24]} justify='center'>
                    {data.map(image =>
                        <Col sm={12} xs={24} md={6}>
                            <img height='250px' src={image} alt='portfolio1' />
                        </Col>)}
                </Row>
            </motion.div>
        </>
    )
}


export default PortfolioImgSection