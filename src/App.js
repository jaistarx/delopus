import React from "react";
import Front from "./Frontpage";
import { Router } from "@reach/router";

function App() {
  return (
    <Router>
      <Frontview path="/"></Frontview>
      <Courses path="/courses"></Courses>
    </Router>
  );
}
const Courses = () => {
  return <h1>course</h1>;
};
const Frontview = () => {
  return <Front />;
};
export default App;
