import React from 'react'
import { Row, Col } from 'antd'
const PortfolioImgSection = ({ data }) => {
    return (
        <>
            <Row gutter={[16, 24]} justify='center'>
                {data.map(image =>
                    <Col sm={12} xs={24} md={6}>
                        <img height='250px' src={image} alt='portfolio1' />
                    </Col>)}
            </Row>
        </>
    )
}


export default PortfolioImgSection