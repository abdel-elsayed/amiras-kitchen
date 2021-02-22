import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import './card.css'
import {Container, Row, Col, Carousel} from 'react-bootstrap'
import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

const window = (new JSDOM('')).window
const DOMPurify = createDOMPurify(window)


function Card (props) {
    const name = props.match.params.name
    const recipe  = props.recipes.find(element => element.name === name);

useEffect(() => {
 console.log(recipe.video)
})

    return (
        <div>
            <div className="recipe-name">
                {recipe.name}
            </div>
            <Container >
                <Row >
                    <Col md={5}>
                        <Carousel>
                            <Carousel.Item >
                                <img
                                src={recipe.image}
                                style={{objectFit:"cover",height:"30rem", width:"30rem", borderRadius:"2rem"}}
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                src={recipe.image2}
                                style={{objectFit:"cover",height:"30rem", width:"30rem", borderRadius:"2rem"}}
                                alt="second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={7}>
                           { <div className="ing" style={{lineHeight: "10pt", padding:"1rem", textDecoration:"none"}}
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(recipe.description) }} /> }
                    </Col>
                </Row>

            <hr style={{width:"50%"}}/>

                <Row>
                    <Col md={7}>
                           { <div className="directions"
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(recipe.directions) }} /> }
                    </Col>
                    <Col md={5} >
                    <iframe width="560" height="315" style={{marginTop:"0.2rem", marginBottom:"2rem", width:"95%", border:"5px solid #904785", borderRadius:"2rem"}}
                    src={recipe.video}
                    frameborder="0" allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; gyroscope; 
                    picture-in-picture" allowfullscreen></iframe>
                    </Col>
                  </Row>
            </Container>
        </div>
    )
}
const mapStateToProps = function(state){
    return{ recipes: state.recipes }
};
export default connect(mapStateToProps)(Card) 