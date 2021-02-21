import React from 'react'
import { Link } from 'react-router-dom';
import {Container, Row, Col, Image} from 'react-bootstrap'
import './MainSection.css'


export default function MainSection() {
    return (
        <div >
            <Container style={{padding:"4rem", background:"rgb(255,255,255, 0.5)",borderRadius:"1em"}}>
                    <Row >
                        <Col md={4}>
                            <Image
                                    style={{boxShadow:" 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
                                    src="https://res.cloudinary.com/dnkxmjpxy/image/upload/v1613874980/IMG_7406_hkjz1l.png"
                                    rounded
                                    alt="Responsive image"
                             />
                        </Col>
                    <Col md-4 >
                        <div >
                        <p className="about-2" style={{ paddingTop:"0.2rem",textAlign:"center",textDecoration: "underline overline"}}>
                            <strong>Welcome to Amira's Kitchen</strong>
                        </p>
                                <p>Hello! My name is Amira. It's so very nice to meet you.</p>
                                <p style={{ paddingTop:"0.2rem",textAlign:"left"}}>
                                    I happily share my passion for all things salted; sweet and savory, 
                                    in hope that you too will find pleasure, joy and sustenance in good food.
                                    Your kitchen is a place to be creative and productive.
                                    Meals are meant to be savored and enjoyed. Good food is simple, fresh,
                                    seasonal and delicious.
                                    Not Without Salt is a tool for helping you eat well and
                                    enjoy the process of cooking and baking real, good food. 
                                </p>
                            </div>
                            <Link to='/'
                                className='learn-more-button'
                            >
                                Instagram <i class="fab fa-instagram"></i>
                            </Link>
                            <Link to='/'
                                className='learn-more-button'
                            >
                                Facebook <i class="fab fa-facebook"></i>
                            </Link>
                        </Col>
                    </Row>
                    
            </Container>
</div>
    )
}
