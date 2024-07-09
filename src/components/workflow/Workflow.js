import React from 'react'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'
import logo5 from '../../assets/logo5.png'
import { Row, Col, Steps } from 'antd'
import { motion } from 'framer-motion'

import './workflow.css'

const Workflow = () => {
    const data = [
        { title: "IDEA", img: logo2 },
        { title: "PROTOTYPE", img: logo4 },
        { title: "DESIGN & DEVELOPMENT", img: logo1 },
        { title: "SOFTWARE LAUNCH", img: logo3 },
        { title: "PROMOTION", img: logo5 },
    ]
    return (
        <>
            <div className='workflow-section'>
                <motion.h1
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 30 }}
                >WORKFLOW</motion.h1>
                {/* <Row gutter={[16, 20]} justify='center' style={{ gap: "20px", padding: '0px 250px' }}> */}
                <Row gutter={[16, 20]} justify='center' style={{ gap: "20px" }}>
                    {data.map(el =>
                        <Col style={{ maxWidth: "138px" }}>
                            <motion.div
                                viewport={{ once: true }}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                                style={{ background: "#000000", padding: "20px", borderRadius: "4px" }}>
                                <img height='80px' src={el?.img} alt='portfolio1' />
                            </motion.div>
                            <motion.p
                                viewport={{ once: true }}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                            >{el?.title}</motion.p>
                        </Col>
                    )}
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 30 }}
                    >

                        <Steps
                            style={{ display: "flex", justifyContent: "center" }}
                            progressDot
                            current={4}
                            items={[
                                {
                                    title: '01',
                                },
                                {
                                    title: '02',
                                },
                                {
                                    title: '03',
                                },
                                {
                                    title: '04',
                                },
                                {
                                    title: '05',
                                },
                            ]}
                        />
                    </motion.div>

                </Row>
            </div>
        </>
    )
}

export default Workflow