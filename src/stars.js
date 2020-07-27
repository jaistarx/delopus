import React from "react";
import Rating from "@material-ui/lab/Rating";
import "./stars.css";
// import HSBar from "react-horizontal-stacked-bar-chart";

import BarExample from "./charts.js";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     "& > * + *": {
//       marginTop: theme.spacing(1),
//     },
//   },
// }));

export default function SimpleRating() {
//   const classes = useStyles();

  return (
      
    <div>
      {/* <div className={classes.root}>
        <Rating name="half-rating" defaultValue={0} precision={0.5} />
        <Rating
          name="half-rating-read"
          defaultValue={4.5}
          precision={0.5}
          readOnly
        />
      </div> */}
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
