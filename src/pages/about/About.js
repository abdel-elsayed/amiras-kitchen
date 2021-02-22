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
     Where love and aspiration mix in a bowl
    </div>
    <hr style={{width:"50%", height:"3rem"}}/>

    <div style={{background:"white"}}> 
      <Container >
      <p className="about-2" style={{ paddingTop:"2rem",textAlign:"center",textDecoration: "underline overline"}}>
        <strong>Welcome to Amira's Kitchen</strong>
      </p>
        <Row >
          
          <Col md={7}>
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
          <Col>
            <div style={{margin:"2rem 5rem 5rem 5rem ", fontSize:""}}>
            <i class="fas fa-quote-left"></i>
              <h3 className="arabic">
                لتكن أحلامك أكبر من مخاوفك و لتكن أفعالك أعلي صوتاً من كلماتك
              </h3>
              <h3 className="english">
                Let your dreams be bigger than your fears and your actions be louder than your words.
              </h3>
              <i class="fas fa-quote-right"></i>
            </div>
          </Col>
        </Row>
      </Container>
      <hr style={{width:"50%", height:"1rem"}}/>


      <Container>
      <p className="about-2" style={{ paddingTop:"0.5rem",textAlign:"center",textDecoration: "underline overline"}}>
        <strong>About me</strong>
      </p>

      <Row >
        <Col >
            <div style={{margin:"2rem 5rem 5rem 5rem ", fontSize:""}}>
            <i class="fas fa-quote-left"></i>
              <h3 className="arabic">
            آمن بأحلامك، فقد مَنحها اللّه لك لحِكمة
              </h3>
              <h3 className="english">
                Believe in your dreams. They were given to you for a reason.
              </h3>
              <i class="fas fa-quote-right"></i>
            </div>
          </Col>
          <Col md={7} >
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