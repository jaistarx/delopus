import React , { useState } from "react";
import "./Front.css";


function Front() {
    const [count, setCount] = useState(1);
    const alterRight = () => {
      if (count === 3) {
        setCount(1);
      } else {
        setCount(count + 1);
      }
    };
    const alterLeft = () => {
      if (count === 1) {
        setCount(3);
      } else {
        setCount(count - 1);
      }
    };
    const myobj = {
      instructor:"Roy Finley",
      role:"Gardening instructor",
      picture:"images/tcr1.svg",
    }
    if(count===1){
      myobj.instructor="Roy Finley";
      myobj.role="Gardening instructor";
      myobj.picture="images/tcr1.svg";
    }
    else if(count === 2) {
      myobj.instructor="Mary Thomas";
      myobj.role="Mathematics instructor";
      myobj.picture="images/tcr2.svg";
    }
    else if(count === 3){
      myobj.instructor="John Damn";
      myobj.role="Science instructor";
      myobj.picture="images/tcr3.svg";
    }
    return (
      <div className="App">
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
              src={myobj.picture}
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
export default Front;
