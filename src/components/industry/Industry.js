import { Row, Col } from 'antd';
import { motion } from 'framer-motion'
import './industry.css'

const Industry = () => {

    return (
        <>
            <div className="industry-section">
                <motion.div
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 30 }}
                >
                    <h1> Our Industry </h1>
                    <h1> Expertise </h1>
                </motion.div>
                <Row gutter={[2, 16]} justify="space-evenly" wrap={false}>
                    <Col xs={24} md={12}>
                        <motion.div
                            viewport={{ once: true }}
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 30 }}
                            className="industry-content">
                            <Row gutter={[16, 2]} >
                                <Col >
                                    <ul >
                                        <li >HEALTHCARE</li>
                                        <li>FINTECH</li>
                                        <li>RETAIL</li>
                                        <li>REAL ESTATE</li>
                                        <li>EDUCATION</li>
                                        <li>LOGISTICS</li>
                                    </ul>
                                </Col>
                            </Row>
                        </motion.div>
                    </Col>
                    <div style={{ border: "1px solid" }}></div>
                    <Col xs={24} md={12}>
                        <motion.div
                            viewport={{ once: true }}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 30 }}
                            className="industry-image">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <h3>REMOTE CARE</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            <h3>ACCESSIBILITY</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Industry