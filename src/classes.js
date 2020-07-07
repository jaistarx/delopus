import React, { useState } from "react";
import "./classes.css";
import { BsFillCaretDownFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

function Classes() {
  const [toggle, setToggle] = useState(0);
  const toggling = () => {
    if (toggle === 0) {
      setToggle(1);
    } else {
      setToggle(0);
    }
  };
  return (
    <div>
      <div className="flex">
        <div className="contents">
          <div className="flex-space">
            <h2>Part 1</h2>
            <button
              type="button"
              className="bt"
              style={{ outline: "none" }}
              onClick={toggling}
            >
              <IconContext.Provider
                value={{
                  size: "80%",
                  color: toggle === 0 ? "black" : "#F3990F",
                }}
              >
                <BsFillCaretDownFill className="icon-drop" />
              </IconContext.Provider>
            </button>
          </div>
          {toggle === 1 && (
            <div>
              <div>
                <div className="flex">
                  <img
                    src="images/tcr1.svg"
                    alt="tcr"
                    className="thumbnails"
                  ></img>
                  <div>
                    <h4> Chapter 1</h4>
                    <p className="descript">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <img
                    src="images/tcr1.svg"
                    alt="tcr"
                    className="thumbnails"
                  ></img>
                  <div>
                    <h4> Chapter 1</h4>
                    <p className="descript">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex">
                  <img
                    src="images/tcr1.svg"
                    alt="tcr"
                    className="thumbnails"
                  ></img>
                  <div>
                    <h4> Chapter 1</h4>
                    <p className="descript">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Classes;
