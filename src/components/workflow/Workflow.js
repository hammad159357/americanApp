import React from 'react'
import portfolio1 from '../../assets/idea-icon.jpg'
import { Row, Col, Steps } from 'antd'

import './workflow.css'

const Workflow = () => {
    const data = [
        { title: "IDEA", img: portfolio1 },
        { title: "PROTOTYPE", img: portfolio1 },
        { title: "DESIGN & DEVELOPMENT", img: portfolio1 },
        { title: "SOFTWARE LAUNCH", img: portfolio1 },
        { title: "PROMOTION", img: portfolio1 },
    ]
    return (
        <>
            <div className='workflow-section'>
                <h1>WORKFLOW</h1>
                <Row gutter={[16, 20]} justify='center' style={{ gap: "20px", padding: '0px 300px' }}>
                    {data.map(el =>
                        <Col style={{ maxWidth: "112px" }}>
                            <div style={{ background: "black", padding: "8px", borderRadius: "4px" }}>
                                <img height='80px' src={el?.img} alt='portfolio1' />
                            </div>
                            <p>{el?.title}</p>
                        </Col>
                    )}
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
                </Row>
            </div>
        </>
    )
}

export default Workflow