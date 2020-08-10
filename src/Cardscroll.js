import React from "react";
import "./Cardscroll.css";
import Image from "react-bootstrap/Image";
import ScrollingHorizontally from "./Horiscroll";
import { BsFillCaretDownFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

function Scroll() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Image
        src="images/tcr1.png"
        fluid
        style={{ marginLeft: "20%", marginRight: "20%", width: "60%" }}
      />
      <ScrollingHorizontally></ScrollingHorizontally>
      {/* <img src="images/tcr1.png" alt="teacher" style={{width:'30%', height:'30%'}}/> */}
      <div>
        <div className="flexing-props">
          <div>
            <p> gftujfjgltflu/</p>
          </div>
          <div>
            <IconContext.Provider
              value={{
                // size: "30.5%",
                color: "orange"
              }}
            >
              <BsFillCaretDownFill />
            </IconContext.Provider>
          </div>
        </div>
        <div>
          <p> gftujfjgltflu/</p>
        </div>
        <div>
          <p> gftujfjgltflu/</p>
        </div>
      </div>
    </div>
  );
}

export default Scroll;
