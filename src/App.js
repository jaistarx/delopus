import React, { useState } from "react";
import "./App.css";


function App() {
  const [count, setCount] = useState(1);
  const alterLeft = () => {
    if (count === 3) {
      setCount(1);
    } else {
      setCount(count + 1);
    }
  };
  const alterRight = () => {
    if (count === 1) {
      setCount(3);
    } else {
      setCount(count - 1);
    }
  };
  const myobj = {
    instructor:"Roy Finley",
    role:"Gardening instructor",
  }
  if(count===1){
    myobj.instructor="Roy Finley";
    myobj.role="Gardening instructor";
  }
  else if(count === 2) {
    myobj.instructor="Mary Thomas";
    myobj.role="Mathematics instructor";
  }
  else if(count === 3){
    myobj.instructor="John Damn";
    myobj.role="Science instructor";
  }
  return (
    <div className="App">
      <div className="topflex">
        <div className="boxes">
          <img src="images/graduate 1.png" alt="graduate"></img>
          <h3 className="orangehead">Endless Downloads</h3>
          <p>
            Stream hundreds of lessons from instructors the world loves the most
          </p>
        </div>
        <div className="boxes">
          <img src="images/computer 1.svg" alt="computer"></img>
          <h3 className="orangehead">Anytime, Anywhere</h3>
          <p>Your class available on smart TVs, phones, mobiles and tablets</p>
        </div>
        <div className="boxes">
          <img src="images/download 1.svg" alt="computer"></img>
          <h3 className="orangehead">Unlimited Downloads</h3>
          <p>
            Downloads your favourites to watch where you want, when you want
          </p>
        </div>
      </div>
      <div class="teaching-images">
        <div className="bottomflex">
          <button type="button" className="buttons">
            <img
              src="images/return 1.svg"
              className="left"
              alt="left"
              onClick={alterLeft}
            ></img>
          </button>
          <img
            src={"images/tcr" + count + ".png"}
            alt="tutor"
            className="tutor"
          ></img>
          <div className="absolute">
            <p>Featuring instructor</p>
            <p className="instructor">{myobj.instructor}</p>
            <p>{myobj.role}</p>
          </div>
          <button type="button" className="buttons">
            <img
              src="images/return 2.svg"
              className="left"
              alt="left"
              onClick={alterRight}
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
