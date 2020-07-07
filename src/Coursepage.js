import React, { useState } from "react";
import "./Courses.css";

function Courses() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(true);
  const [show, setShow] = useState(0);

  const F = (e) => {
    setA(true);
    setB(false);
    setShow(e);
  };
  const G = (e) => {
    setA(false);
    setB(true);
    setShow(0);
  };

  return (
    <div>
      <div className="title">
        <h1>Best online courses</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
      </div>
      <div className="fluxing">
        <div
          className="img"
          onMouseEnter={(e) => F(1)}
          onMouseLeave={(e) => G(1)}
        >
          <img
            src="images/test.png"
            alt="courseimg"
            className="image-align"
          ></img>
          {show === 1 && a && (
            <div className="coursebox">
              <h1>NATA Coaching</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text
              </p>
              <div className="fluxing">
                <button>course details</button>
                <button>join now</button>
              </div>
            </div>
          )}
          {(show !== 1 || b) && (
            <div className="coursebox-new">
              <h1>NATA Coaching</h1>
              <p>
                15+ chapters, Assignments and additional resources and more.
              </p>
            </div>
          )}
        </div>
        <div
          className="img"
          onMouseEnter={(e) => F(2)}
          onMouseLeave={(e) => G(2)}
        >
          <img
            src="images/test.png"
            alt="courseimg"
            className="image-align"
          ></img>
          {show === 2 && a && (
            <div className="coursebox">
              <h1>NATA Coaching</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text
              </p>
              <div className="fluxing">
                <button>course details</button>
                <button>join now</button>
              </div>
            </div>
          )}
          {(show !== 2 || b) && (
            <div className="coursebox-new">
              <h1>NATA Coaching</h1>
              <p>
                15+ chapters, Assignments and additional resources and more.
              </p>
            </div>
          )}
        </div>
        <div
          className="img"
          onMouseEnter={(e) => F(3)}
          onMouseLeave={(e) => G(3)}
        >
          <img
            src="images/test.png"
            alt="courseimg"
            className="image-align"
          ></img>
          {show === 3 && a && (
            <div className="coursebox">
              <h1>NATA Coaching</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text
              </p>
              <div className="fluxing">
                <button>course details</button>
                <button>join now</button>
              </div>
            </div>
          )}
          {(show !== 3 || b) && (
            <div className="coursebox-new">
              <h1>NATA Coaching</h1>
              <p>
                15+ chapters, Assignments and additional resources and more.
              </p>
            </div>
          )}
        </div>
        <div
          className="img"
          onMouseEnter={(e) => F(4)}
          onMouseLeave={(e) => G(4)}
        >
          <img
            src="images/test.png"
            alt="courseimg"
            className="image-align"
          ></img>
          {show === 4 && a && (
            <div className="coursebox">
              <h1>NATA Coaching</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text
              </p>
              <div className="fluxing">
                <button>course details</button>
                <button>join now</button>
              </div>
            </div>
          )}
          {(show !== 4 || b) && (
            <div className="coursebox-new">
              <h1>NATA Coaching</h1>
              <p>
                15+ chapters, Assignments and additional resources and more.
              </p>
            </div>
          )}
        </div>
        <div
          className="img"
          onMouseEnter={(e) => F(5)}
          onMouseLeave={(e) => G(5)}
        >
          <img
            src="images/test.png"
            alt="courseimg"
            className="image-align"
          ></img>
          {show === 5 && a && (
            <div className="coursebox">
              <h1>NATA Coaching</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text
              </p>
              <div className="fluxing">
                <button>course details</button>
                <button>join now</button>
              </div>
            </div>
          )}
          {(show !== 5 || b) && (
            <div className="coursebox-new">
              <h1>NATA Coaching</h1>
              <p>
                15+ chapters, Assignments and additional resources and more.
              </p>
            </div>
          )}
        </div>
        <div
          className="img"
          onMouseEnter={(e) => F(6)}
          onMouseLeave={(e) => G(6)}
        >
          {show === 6 && a && (
            <div>
              <img
                src="images/test.png"
                alt="courseimg"
                className="image-align"
                style={{ opacity: 0.5 }}
              ></img>
              <div className="coursebox">
                <h1>NATA Coaching</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text
                </p>
                <div className="fluxing">
                  <button>course details</button>
                  <button>join now</button>
                </div>
              </div>
            </div>
          )}
          {(show !== 6 || b) && (
            <div>
              <img
                src="images/test.png"
                alt="courseimg"
                className="image-align"
              ></img>
              <div className="coursebox-new">
                <h1>NATA Coaching</h1>
                <p>
                  15+ chapters, Assignments and additional resources and more.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
