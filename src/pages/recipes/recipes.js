import React, { useEffect } from "react";
import { client } from "../../ebconfig";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./recipes.css";
import { Link as Linky } from "react-scroll";
import { useStateValue } from "../../redux/StateProvider";

function Recipes() {
  const [{ articles }, dispatch] = useStateValue();

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        dispatch({ type: "SAVE_ARTICLES", payload: response.items });
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div>
        <img
          className="d-block w-100 custom-img"
          src="https://images.unsplash.com/photo-1513104806186-1b00f3e7a65e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        ></img>

        <div className="downArrow bounce">
          <Linky to="recipes">
            <i className="fas fa-cookie-bite fa-3x"></i>
          </Linky>
        </div>
      </div>
      <div className="sub-head" style={{}}>
        Something that is made with love, will always taste great!
      </div>

      <hr style={{ width: "50%", height: "3rem" }} />
      <div id="recipes"></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "5em",
        }}
      >
        <div style={{ backgroundColor: "white", width: "100%" }}>
          <p
            style={{
              fontSize: "3rem",
              textAlign: "center",
              fontFamily: "'Brush Script MT', cursive",
              padding: "2rem",
            }}
          >
            Recipes
          </p>

          <Container>
            <Row className="pb-5 ">
              {articles.map((ele, i) => (
                <Col
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Card
                    style={{
                      width: "17rem",
                      borderRadius: "3rem",
                      marginTop: "1rem",
                    }}
                  >
                    <Card.Img
                      style={{
                        height: "15rem",
                        borderRadius: "2rem",
                        objectFit: "cover",
                      }}
                      src={ele.fields.pictures[0].fields.file.url}
                    />
                    <Card.Body>
                      <Card.Title
                        style={{ textDecoration: "underline overline" }}
                      >
                        {ele.fields.name}
                      </Card.Title>
                      <Card.Text>{ele.fields.description}</Card.Text>
                      <Link to={`/card/${i}`} className="learn-more-button">
                        view <i className="fas fa-utensils"></i>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Recipes;
