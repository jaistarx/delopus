import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import Rating from "@material-ui/lab/Rating";
import "./stars.css";
import { IconContext } from "react-icons/lib";
import { BsPersonFill } from "react-icons/bs";
// git test
var options = {
  scales: {
    xAxes: [
      {
        display: false,
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
  legend: {
      display:false,
  }
};
const data = {
  labels: ["5", "4", "3", "2", "1"],
  datasets: [
    {
      label: "Ratings",
      backgroundColor: [
        "rgba(255,99,132)",
        "rgba(50,199,200)",
        "rgba(255,200,32)",
        "rgba(0,99,132)",
        "rgba(255,99,0)",
      ],
      
      borderWidth: 1,

      data: [85, 59, 20, 11, 6],
    },
  ],
};

export default class BarExample extends Component {
  render() {
    return (
      <div className="rateflex">
        <div className="star-margin">
          <div className="rate">
            <p>4.5</p>
          </div>
          <div className="rate-stars">
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
          </div>
          <div>
            <div className="pplflex">
              <div style={{ width: "10%" }}>
                <IconContext.Provider
                  value={{
                    color: "gray",
                  }}
                >
                  <BsPersonFill />
                </IconContext.Provider>
              </div>
              <div className="ppl">
                <p>3339</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bars">
          <h2>Reviews</h2>
          <HorizontalBar
            data={data}
            width={100}
            height={50}
            options={options}
          />
        </div>
        
      </div>
    );
  }
}
