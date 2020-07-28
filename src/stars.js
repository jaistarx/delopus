import React from "react";
import Rating from "@material-ui/lab/Rating";
import "./stars.css";
import BarExample from "./charts.js";


export default function SimpleRating() {


  return (
      
    <div>
      
      <BarExample />
 
      <div className="ratings">
        <div className="spaces">
          <img src="images/comp.svg" alt="profile" className="profile"></img>
        </div>

        <div>
          <Rating
            name="half-rating-read"
            defaultValue={4}
            precision={0.5}
            readOnly
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
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text.
          </p>
        </div>
      </div>
      <div>
      
      
      
      </div>
    </div>
  );
}
