import React from 'react'
import { Link } from 'react-router-dom';
import {Container, Row, Col, Image} from 'react-bootstrap'
import './MainSection.css'

export default function MainSection() {
    return (
        
            <Container className='mt-5' style={{padding:"2rem", background:"rgb(255,255,255, 0.5)", borderRadius:"1em"}}>
                    <Row >
                        <Col md={4}>
                            <Image
                                    src="https://res.cloudinary.com/dnkxmjpxy/image/upload/v1613798758/AmiraMainPic_lnnmzz.jpg"
                                    rounded
                                    alt="Responsive image"
                             />
                        </Col>
                    <Col md-4 >
                        <div class=" border-0">
                                <h3 >Welcome to my Kitchen</h3>
                                <p >
                                    I am Amira Elsayed,
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin tellus non augue lobortis laoreet.
                                     Donec nisi ante, molestie ac massa quis, faucibus fermentum risus. Sed feugiat est ut urna finibus fringilla.
                                      Proin vitae elit consequat, hendrerit dui id, mattis ipsum. Vivamus congue dignissim velit pulvinar aliquet.
                                       Etiam tincidunt ipsum augue, ut consectetur lacus euismod in. Donec dictum ante quis condimentum suscipit.
                                        Aliquam aliquet porta elit et scelerisque. Nullam iaculis lobortis ante eu dignissim. Nunc tincidunt, 
                                        libero ac porttitor pretium, tortor ex fringilla erat, at malesuada dolor tellus vitae quam. Ut sit amet fermentum lectus, ut blandit purus. S
                                        uspendisse non magna placerat, dignissim nulla id, ultricies augue. Aliquam erat volutpat. Nulla facilisi. In mollis sit amet nulla vestibulum convallis.
                                        Maecenas nisi orci, ornare id fermentum eu, commodo eget leo. Duis pellentesque leo quis urna bibendum, et consectetur nulla semper.
                                </p>
                            </div>
                            <Link to='/about'
                                className='learn-more-button'
                            >
                                learn more <i class="fas fa-cookie-bite"></i>
                            </Link>
                        </Col>
                    </Row>

            </Container>

    )
}
