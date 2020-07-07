import React from "react";
import Front from "./Frontpage";
import { Router } from "@reach/router";
import Course from "./Coursepage"
import Classes from "./classes"

function App() {
  return (
    <Router>
      <Frontview path="/"></Frontview>
      <Courses path="/courses"></Courses>
      <Classview path="/classes"></Classview>
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
export default App;
