import React from "react";
import "./Front.css";
import Carousel from "react-bootstrap/Carousel";

function Front() {

  return (
    <div className="App" style={{ backgroundColor: "#060625" }}>
      <div className="topflex">
        <div className="boxes">
          <img src="images/edu.svg" alt="graduate"></img>
          <h3 className="orangehead">Endless Downloads</h3>
          <p>
            Stream hundreds of lessons from instructors the world loves the most
          </p>
        </div>
        <div className="boxes">
          <img src="images/comp.svg" alt="computer"></img>
          <h3 className="orangehead">Anytime, Anywhere</h3>
          <p>Your class available on smart TVs, phones, mobiles and tablets</p>
        </div>
        <div className="boxes">
          <img src="images/down.svg" alt="computer"></img>
          <h3 className="orangehead">Unlimited Downloads</h3>
          <p>
            Downloads your favourites to watch where you want, when you want
          </p>
        </div>
      </div>
      
      <div className="carousels">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/tcr1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="cartext">
            <h2>Instructor</h2>
            <h1>Roy Finley</h1>
            <h2>Gardening Instructor</h2></div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/tcr2.png"
            alt="Third slide"
          />

          <Carousel.Caption>
          <div className="cartext">
            <h2>Instructor</h2>
            <h1>Mary Thomas</h1>
            <h2>Mathematics Instructor</h2></div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/tcr3.png"
            alt="Third slide"
          />

          <Carousel.Caption>
          <div className="cartext">
            <h2>Instructor</h2>
            <h1>John Don</h1>
            <h2>Physics Instructor</h2></div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
  );
}
export default Front;
