import React from "react";

import "./card.css";
import { useStateValue } from "../../redux/StateProvider";
import { Container, Row, Col, Carousel } from "react-bootstrap";

function Card(props) {
  const [{ articles }, dispatch] = useStateValue();
  // const id = props.match.params.id;
  // const recipe = articles[id];
  const { name, pictures, directions, video, ingredients } = articles[
    props.match.params.id
  ].fields;
  return (
    <div>
      <div className="recipe-name">{name}</div>
      <Container>
        <Row>
          <Col md={5}>
            <Carousel>
              <Carousel.Item>
                <img
                  src={pictures[0].fields.file.url}
                  style={{
                    objectFit: "cover",
                    height: "30rem",
                    width: "30rem",
                    borderRadius: "2rem",
                  }}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={pictures[1].fields.file.url}
                  style={{
                    objectFit: "cover",
                    height: "30rem",
                    width: "30rem",
                    borderRadius: "2rem",
                  }}
                  alt="second slide"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={7}>
            {
              <div
                className="ing"
                style={{
                  lineHeight: "10pt",
                  padding: "1rem",
                  textDecoration: "none",
                }}
                dangerouslySetInnerHTML={{ __html: ingredients }}
              />
            }
          </Col>
        </Row>

        <hr style={{ width: "50%" }} />

        <Row>
          <Col md={7}>
            {
              <div
                className="directions"
                dangerouslySetInnerHTML={{ __html: directions }}
              />
            }
          </Col>
          <Col md={5}>
            <iframe
              width="560"
              height="315"
              style={{
                marginTop: "0.2rem",
                marginBottom: "2rem",
                width: "95%",
                border: "5px solid #904785",
                borderRadius: "2rem",
              }}
              src={video}
              frameBorder="0"
              allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; gyroscope; 
                    picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Card;
