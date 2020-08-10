import React from "react";
import Front from "./Frontpage";
import { Router } from "@reach/router";
import Course from "./Coursepage";
import Classes from "./classes";
import Desc from "./CourseDesc";
import Scroll from "./Cardscroll";

function App() {
  return (
    <Router>
      <Frontview path="/"></Frontview>
      <Courses path="/courses"></Courses>
      <Classview path="/classes"></Classview>
      <Description path="/description"></Description>
      <Cardscrolling path="/cards"></Cardscrolling>
    </Router>
  );
}
const Courses = () => {
  return <Course />;
};
const Frontview = () => {
  return <Front />;
};
const Classview = () => {
  return <Classes />;
};
const Description = () => {
  return <Desc />;
};
const Cardscrolling = () => {
  return <Scroll />;
};
export default App;
