import React from "react";
import Carousel from "react-bootstrap/Carousel";


 import "./myCarousal.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel  controls={false} indicators interval={3500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src="https://images.unsplash.com/photo-1523294587484-bae6cc870010?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2064&q=80" alt="First slide" />
          <div className="carousel-caption quote" >
          <h3 className="arabic">".دائما خذ في عين الإعتبيار أن قرار النجاح هو أهم من أي شيئ آخر"</h3>
          <h3 className="english">"Always bear in mind that your own resolution to succeed is more important than any other."</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="Third slide" />
          <div className="carousel-caption quote" >
          <h3 className="arabic">".السعادة ليست شيئاً يحصل بسهولة, فإنها تأتي من أفعالك"</h3>
          <h3 className="english">"Happiness is not something readymade. It comes from your own actions."</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80" alt="Third slide" />
          <div className="carousel-caption  quote">
            <h3 className="arabic">"القرد في عين أمه غزال"</h3>
            <h3 className="english">"The monkey is a gazelle in the eyes of his mother."</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src="https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="Third slide" />
          <div className="carousel-caption  quote">
          <h3 className="arabic">"القرد في عين أمه غزال"</h3>
            <h3 className="english">"The monkey is a gazelle in the eyes of his mother."</h3>
         </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src="https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80" alt="Third slide" />
          <div className="carousel-caption  quote">
          <h3 className="arabic">"القرد في عين أمه غزال"</h3>
            <h3 className="english">"The monkey is a gazelle in the eyes of his mother."</h3>
          </div>
        </Carousel.Item>
       
      </Carousel>
      
      <div className="downArrow bounce">
      <i style={{color:"white"}}className="fas fa-arrow-down fa-3x"></i>  
        </div>
    </div>
  );
};
export default MyCarousal;
