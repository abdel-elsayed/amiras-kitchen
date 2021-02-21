import React from "react";
// import "./About.css";
// import '../styling/Cards.css';
// import  Skills  from "../Skills";
// import Experience from "../Experience";
// import ScrollAnimation from 'react-animate-on-scroll'
import {Container, Row, Col, Image} from 'react-bootstrap'
import './About.css'

import MainSection from '../../components/main-section/MainSection.js'



const About = () => {
   
  return (
    <div  >
        <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
        paddingTop:"17em",
       }}>
                <MainSection />
    </div>

    <div className="sub-head" >
      Where aspiration and reality collide.
    </div>
    <hr style={{width:"50%", height:"3rem"}}/>

    <div style={{background:"white"}}> 
      <Container >
      <p className="about-2" style={{ paddingTop:"2rem",textAlign:"center",textDecoration: "underline overline"}}>
        <strong>Welcome to Amira's Kitchen</strong>
      </p>
        <Row >
          
          <Col >
              <p className="about-2">
                I happily share my passion for all things salted; sweet and savory, 
                in hope that you too will find pleasure, joy and sustenance in good food.
                Your kitchen is a place to be creative and productive.
                Meals are meant to be savored and enjoyed. Good food is simple, fresh,
                seasonal and delicious.
                Not Without Salt is a tool for helping you eat well and
                enjoy the process of cooking and baking real, good food.
              </p>
          </Col>
          <Col >
            <div style={{margin:"5rem", fontSize:""}}>
            <i class="fas fa-quote-left"></i>
              <h3 className="arabic">
              .ائما خذ في عين الإعتبيار أن قرار النجاح هو أهم من أي شيئ آخر
              </h3>
              <h3 className="english">
                Where aspiration and reality collide.
              </h3>
              <i class="fas fa-quote-right"></i>
            </div>
          </Col>
        </Row>
      </Container>
      <hr style={{width:"50%", height:"3rem"}}/>


      <Container>
      <p className="about-2" style={{ paddingTop:"2rem",textAlign:"center",textDecoration: "underline overline"}}>
        <strong>About me</strong>
      </p>

      <Row >
        <Col >
            <div style={{margin:"5rem", fontSize:""}}>
            <i class="fas fa-quote-left"></i>
              <h3 className="arabic">
              .ائما خذ في عين الإعتبيار أن قرار النجاح هو أهم من أي شيئ آخر
              </h3>
              <h3 className="english">
                Where aspiration and reality collide.
              </h3>
              <i class="fas fa-quote-right"></i>
            </div>
          </Col>
          <Col >
              <p className="about-2">
                Plating intricate desserts at Spago in Beverly Hills is where my career in food began. 
                There was a rush in preparing hundred of desserts in one night,
                in spinning batch after batch of homemade ice cream speckled with thousands of diminutive vanilla seeds, 
                in making cookies and cakes by the dozen – and I was hooked; with no plans to leave, as I was on the path to become a pastry chef.
                In an instant my plans changed as I found out I was pregnant with our first. 
                A shock as my husband and I thought having children would be difficult or even impossible for me. 
                We moved back to Washington from L.A. and my journey into motherhood began.
              </p>
          </Col>
         
        </Row>
      </Container>
    </div>
   
    </div>
  )
}

export default About;