import React, { useState } from "react";
import "./Cardscroll.css";
import Image from "react-bootstrap/Image";
import ScrollingHorizontally from "./Horiscroll";
import { BsFillCaretDownFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

function Scroll() {
  const [drop, setDrop] = useState(0);
  const faq = (e) => {
    // if(e===1){
    //   setDrop(1)
    // }
    // else if(e===2){
    //   setDrop(2)
    // }
    if (e === drop) setDrop(0);
    else setDrop(e);
  };
  return (
    <div style={{ backgroundColor: "black" }}>
      <Image
        src="images/tcr1.png"
        fluid
        style={{ marginLeft: "20%", marginRight: "20%", width: "60%" }}
      />
      {/* <ScrollingHorizontally></ScrollingHorizontally> */}
      {/* <img src="images/tcr1.png" alt="teacher" style={{width:'30%', height:'30%'}}/> */}
      <div>
        <div className="flexing-props">
          <div style={{ paddingTop: "1.5%" }}>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div style={{ paddingTop: "1.5%" }} onClick={(e) => faq(1)}>
            <IconContext.Provider
              value={{
                // size: "25%",
                color: "orange",
              }}
            >
              <BsFillCaretDownFill />
            </IconContext.Provider>
          </div>
        </div>
        {drop === 1 && (
          <div className="dropping">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.Lorem Ipsum is simply dummy text
              of the printing and typesetting industry.
            </p>
          </div>
        )}

        <div className="flexing-props">
          <div style={{ paddingTop: "1.5%" }}>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div style={{ paddingTop: "1.5%" }} onClick={(e) => faq(2)}>
            <IconContext.Provider
              value={{
                // size: "30.5%",
                color: "orange",
              }}
            >
              <BsFillCaretDownFill />
            </IconContext.Provider>
          </div>
        </div>
        {drop === 2 && (
          <div className="dropping">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.Lorem Ipsum is simply dummy text
              of the printing and typesetting industry.
            </p>
          </div>
        )}
        <div className="flexing-props">
          <div style={{ paddingTop: "1.5%" }}>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div style={{ paddingTop: "1.5%" }} onClick={(e) => faq(3)}>
            <IconContext.Provider
              value={{
                // size: "30.5%",
                color: "orange",
              }}
            >
              <BsFillCaretDownFill />
            </IconContext.Provider>
          </div>
        </div>
        {drop === 3 && (
          <div className="dropping">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.Lorem Ipsum is simply dummy text
              of the printing and typesetting industry.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Scroll;
