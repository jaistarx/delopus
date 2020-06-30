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
  return <h2>course</h2>;
};
const Frontview = () => {
  return <Front />;
};
export default App;
