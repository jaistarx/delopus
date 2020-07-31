import React, { useState } from "react";
import "./CourseDesc.css";
import SimpleRating from "./stars";
import { IconContext } from "react-icons/lib";
import { BsPersonFill } from "react-icons/bs";
import StarRatings from "react-star-ratings";
function Desc() {
  const [des, setDes] = useState(1);
  const disp = (e) => {
    if (e === 1) {
      setDes(1);
    } else if (e === 2) {
      setDes(2);
    } else if (e === 3) {
      setDes(3);
    } else if (e === 4) {
      setDes(4);
    } else if (e === 5) {
      setDes(5);
    }
  };
  return (
    <div>
      <div className="topflexing">
        <div className="headingmain">
          <h1 style={{ fontWeight: "800" }}>NATA Coaching</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text.
          </p>
        </div>
        <div className="resp">
          <div>
            <h1 style={{ fontWeight: "800" }}>15+</h1>
          </div>
          <div className="topp">
            <p>Chapters</p>
          </div>
        </div>
        <div className="resp">
          <div>
            <h1 style={{ fontWeight: "800" }}>10+</h1>
          </div>
          <div className="topp">
            <p>Assigmnets</p>
          </div>
        </div>
        <div className="resp">
          <div>
            <h1 style={{ fontWeight: "800" }}>15+</h1>
          </div>
          <div className="topp">
            <p>Extra resources</p>
          </div>
        </div>
        <div className="starbutton">
          <div>
            <div>
              <div className="pplflex">
                <div className="star">
                  <StarRatings
                    rating={4.503}
                    starDimension="1rem"
                    starSpacing="0.05rem"
                    starRatedColor="#F3990F"
                  />
                </div>
                <div>
                  <IconContext.Provider
                    value={{
                      // size: "30.5%",
                      color: "gray",
                    }}
                  >
                    <BsPersonFill />
                  </IconContext.Provider>
                </div>
                <div
                  className="ppl"
                  style={{ marginTop: "4%", marginLeft: "2%" }}
                >
                  <p>3339</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="join">Join now for 3000</button>
          </div>
        </div>
      </div>
      <div className="vdo">
        <h3 className="course-intro">Course Introduction</h3>
        <img src="images/tcr2.png" alt="vdo" className="imgvdo"></img>
      </div>
      <div className="graybox">
        <div className="grayflexing">
          <div
            onClick={(e) => disp(1)}
            style={{ color: des === 1 ? "#F3990F" : "black" }}
          >
            <p>Description</p>
          </div>
          <div
            onClick={(e) => disp(2)}
            style={{ color: des === 2 ? "#F3990F" : "black" }}
          >
            <p>What you will learn</p>
          </div>
          <div
            onClick={(e) => disp(3)}
            style={{ color: des === 3 ? "#F3990F" : "black" }}
          >
            <p>Features</p>
          </div>
          <div
            onClick={(e) => disp(4)}
            style={{ color: des === 4 ? "#F3990F" : "black" }}
          >
            <p>Instructors</p>
          </div>
          <div
            onClick={(e) => disp(5)}
            style={{ color: des === 5 ? "#F3990F" : "black" }}
          >
            <p>FAQ</p>
          </div>
        </div>
        <div className="text-desc">
          {des === 1 && (
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text.
              </p>
              <ul>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </li>
                <li>
                  .Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </li>
                <li>
                  .Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </li>
              </ul>
            </div>
          )}
          {des === 2 && (
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text.
              </p>
            </div>
          )}
          {des === 3 && (
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <ul>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </li>
                <li>
                  .Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </li>
                <li>
                  .Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </li>
              </ul>
            </div>
          )}
          {des === 4 && (
            <div>
              <ul>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </li>
                <li>
                  .Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </li>
                <li>
                  .Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </li>
              </ul>
            </div>
          )}
          {des === 5 && (
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text.
              </p>
            </div>
          )}
        </div>
      </div>
      <SimpleRating />
    </div>
  );
}

export default Desc;
