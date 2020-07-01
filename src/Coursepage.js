import React, { useState } from "react";
import "./Courses.css";

function Courses() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(true);
  const F = () => {
    if (a === true) {
      setA(false);
      setB(true);
    } else {
      setA(true);
      setB(false);
    }
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
        <div className="img" onMouseEnter={F} onMouseLeave={F}>
          <img src="images/test.png" alt="courseimg"></img>
          {a && (
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
          {b && (
            <div className="coursebox">
              <h1>NATA Coaching</h1>
              <p>
                15+ chapters, Assignments and additional resources and more.
              </p>
            </div>
          )}
        </div>
        <div className="img" onMouseEnter={F} onMouseLeave={F}>
          <img src="images/test.png" alt="courseimg"></img>
          {a && (
            <div>
              <h1>Fine art workshop</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
            </div>
          )}
          {b && (
            <div>
              <h1>Fine art workshop</h1>
              <p>
                15+ chapters, Assignments and additional resources and more.
              </p>
            </div>
          )}
        </div>
        <div className="img" onMouseEnter={F} onMouseLeave={F}>
          <img src="images/test.png" alt="courseimg"></img>
          {a && (
            <div>
              <h1>NATA Coaching</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
            </div>
          )}
          {b && (
            <div>
              <h1>NATA Coaching</h1>
              <p>
                15+ chapters, Assignments and additional resources and more.
              </p>
            </div>
          )}
        </div>
        <div className="img" onMouseEnter={F} onMouseLeave={F}>
          <img src="images/test.png" alt="courseimg"></img>
          {a && (
            <div>
              <h1>NATA Coaching</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
            </div>
          )}
          {b && (
            <div>
              <h1>NATA Coaching</h1>
              <p>
                15+ chapters, Assignments and additional resources and more.
              </p>
            </div>
          )}
        </div>
        <div className="img" onMouseEnter={F} onMouseLeave={F}>
          <img src="images/test.png" alt="courseimg"></img>
          {a && (
            <div>
              <h1>NATA Coaching</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
            </div>
          )}
          {b && (
            <div>
              <h1>NATA Coaching</h1>
              <p>
                15+ chapters, Assignments and additional resources and more.
              </p>
            </div>
          )}
        </div>
        <div className="img" onMouseEnter={F} onMouseLeave={F}>
          <img src="images/test.png" alt="courseimg"></img>
          {a && (
            <div>
              <h1>NATA Coaching</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text
              </p>
            </div>
          )}
          {b && (
            <div>
              <h1>NATA Coaching</h1>
              <p>
                15+ chapters, Assignments and additional resources and more.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;
