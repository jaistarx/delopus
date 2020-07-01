import React from "react";
import Front from "./Frontpage";
import { Router } from "@reach/router";
import Course from "./Coursepage"

function App() {
  return (
    <Router>
      <Frontview path="/"></Frontview>
      <Courses path="/courses"></Courses>
    </Router>
  );
}
const Courses = () => {
  return <Course />;
};
const Frontview = () => {
  return <Front />;
};
export default App;
