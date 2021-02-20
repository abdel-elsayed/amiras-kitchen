import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default function MainSection() {
    return (
        <div style={{position:"absolute", top:"22em"}}>
            <Container>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
            </Container>
        </div>
    )
}
