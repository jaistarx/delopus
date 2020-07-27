import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import Rating from "@material-ui/lab/Rating";
import "./stars.css";
import { IconContext } from "react-icons/lib";
import { BsPersonFill } from "react-icons/bs";
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
      //   borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,

      data: [85, 59, 20, 11, 6],
    },
  ],
};

export default class BarExample extends Component {
  render() {
    return (
      <div className="rateflex">
        <div>
          <div
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              marginTop: "20%",
              marginLeft: "20%",
              marginRight: "20%",
              width: "60%",
            }}
          >
            <p>4.5</p>
          </div>
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
          <div>
            <div className="pplflex">
              <div style={{width:'10%'}}>
                <IconContext.Provider
                  value={{
                    // size: "30.5%",
                    color: "gray",
                  }}
                >
                  <BsPersonFill />
                </IconContext.Provider>
              </div>
              <div className="ppl" style={{marginTop:'5%'}}>
                <p>3339</p>
              </div>
            </div>
            <p className="ppl" style={{marginTop:'-10%'}}>Total</p>
          </div>
        </div>
        <div style={{ width: "25%" }}>
          <h2>Reviews</h2>
          <HorizontalBar
            data={data}
            width={100}
            height={50}
            type="horizontalBar"
            options={options}
          />
        </div>

        <textarea
          placeholder="Write your review"
          type="text"
          className="texts"
        ></textarea>
        <img src="images/edu.svg" alt="profile" className="mypro"></img>
      </div>
    );
  }
}
