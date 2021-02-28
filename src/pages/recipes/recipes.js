import React, { useEffect } from "react";
import { useEasybase } from "easybase-react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { SAVE_ALL_RECIPES } from "../../redux/actions";
import "./recipes.css";

function Recipes({ save, recipes }) {
  const { Frame, configureFrame, sync } = useEasybase();

  useEffect(() => {
    configureFrame({ limit: 20, offset: 0 });
    sync();
    // save(SAVE_ALL_RECIPES, Frame());
  });

  return (
    <>
      <div>
        <img
          className="d-block w-100 custom-img"
          src="https://images.unsplash.com/photo-1513104806186-1b00f3e7a65e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        ></img>
        <div className="downArrow bounce">
          <i style={{ color: "white" }} className="fas fa-arrow-down fa-3x"></i>
        </div>
      </div>
      <div className="sub-head" style={{}}>
        Something that is made with love, will always taste great!
      </div>

      <hr style={{ width: "50%", height: "3rem" }} />

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
              fontSize: "30px",
              textAlign: "center",
              fontFamily: "Snell Roundhand, cursive",
              padding: "2rem",
            }}
          >
            <strong>Recipes</strong>
          </p>

          <Container>
            <Row className="pb-5 ">
              {Frame().map((ele, i) => (
                <Col
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
                      src={ele.image}
                    />
                    <Card.Body>
                      <Card.Title
                        style={{ textDecoration: "underline overline" }}
                      >
                        {ele.name}
                      </Card.Title>
                      <Card.Text>{ele.subdescription}</Card.Text>
                      <Link
                        to={`/card/${ele.name}`}
                        className="learn-more-button"
                      >
                        view <i class="fas fa-utensils"></i>
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

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});
const mapDispatchToProps = (dispatch) => {
  return {
    save: (type, data) => dispatch({ type: type, payload: data }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
