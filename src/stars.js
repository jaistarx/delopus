import React from "react";
import "./stars.css";
import BarExample from "./charts.js";
import StarRatings from "react-star-ratings";

export default function SimpleRating() {
  return (
    <div>
      <BarExample />

      <div className="ratings">
        <div className="spaces">
          <img src="images/comp.svg" alt="profile" className="profile"></img>
        </div>

        <div>
          <StarRatings
            rating={4.503}
            starDimension="1.2rem"
            starSpacing="0.2rem"
            starRatedColor="#F3990F"
          />

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text.
          </p>
        </div>
      </div>
      <div className="ratings">
        <div className="spaces">
          <img src="images/comp.svg" alt="profile" className="profile"></img>
        </div>

        <div>
          <StarRatings
            rating={4.003}
            starDimension="1.2rem"
            starSpacing="0.2rem"
            starRatedColor="#F3990F"
          />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}
