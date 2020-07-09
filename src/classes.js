import React, { useState } from "react";
import "./classes.css";
import { BsFillCaretDownFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

function Classes() {
  // const [toggle, setToggle] = useState(0);
  const [changer, setChanger] = useState(0);
  const [det, setDet] = useState(1);
  const detailing = e => {
    setDet(e);
  };
  const toggling = e => {
    setChanger(e);
    if (changer === e) {
      setChanger(0);
    } else {
      setChanger(e);
    }
  };
  return (
    <div>
      <div className="flex">
        <div className="outer">
          <div className="contents">
            <h1><b>NATA Coaching</b></h1>
          </div>
          <div className="contents">
            <div className="flex-space">
              <h2>Part 1</h2>
              <button
                type="button"
                className="bt"
                style={{ outline: "none" }}
                onClick={e => toggling(1)}
              >
                <IconContext.Provider
                  value={{
                    size: "80%",
                    color: changer === 1 ? "#F3990F" : "black"
                  }}
                >
                  <BsFillCaretDownFill className="icon-drop" />
                </IconContext.Provider>
              </button>
            </div>
            {changer === 1 && (
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
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text.
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
                      <h4> Chapter 2</h4>
                      <p className="descript">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text.
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
                      <h4> Chapter 3</h4>
                      <p className="descript">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="contents">
            <div className="flex-space">
              <h2>Part 2</h2>
              <button
                type="button"
                className="bt"
                style={{ outline: "none" }}
                onClick={e => toggling(2)}
              >
                <IconContext.Provider
                  value={{
                    size: "80%",
                    color: changer === 2 ? "#F3990F" : "black"
                  }}
                >
                  <BsFillCaretDownFill className="icon-drop" />
                </IconContext.Provider>
              </button>
            </div>
            {changer === 2 && (
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
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text.
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
                      <h4> Chapter 2</h4>
                      <p className="descript">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text.
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
                      <h4> Chapter 3</h4>
                      <p className="descript">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>{" "}
          <div className="contents">
            <div className="flex-space">
              <h2>Part 3</h2>
              <button
                type="button"
                className="bt"
                style={{ outline: "none" }}
                onClick={e => toggling(3)}
              >
                <IconContext.Provider
                  value={{
                    size: "80%",
                    color: changer === 3 ? "#F3990F" : "black"
                  }}
                >
                  <BsFillCaretDownFill className="icon-drop" />
                </IconContext.Provider>
              </button>
            </div>
            {changer === 3 && (
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
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text.
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
                      <h4> Chapter 2</h4>
                      <p className="descript">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text.
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
                      <h4> Chapter 3</h4>
                      <p className="descript">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="rightside">
          <div className="heading">
            <h1>Part 1: Chapter 1</h1>
          </div>
          <img src="images/tcr2.png" alt="side image" className="bigimage"></img>
          <div className="flex">
            <div className="details">
              <h3 onClick={e => detailing(1)}>About</h3>
            </div>
            <div className="details">
              <h3 onClick={e => detailing(2)}>Transcript</h3>
            </div>
            <div className="details">
              <h3 onClick={e => detailing(3)}>Resources</h3>
            </div>
          </div>
          {det === 1 && (
            <div>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.{" "}
              </p>
            </div>
          )}
          {det === 2 && (
            <div>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters
              </p>
            </div>
          )}
          {det === 3 && (
            <div>
              <p>
                {" "}
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Classes;
