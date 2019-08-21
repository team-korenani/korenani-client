import React from "react";
import App from "./App";
import Camera from "./Camera";
import Tutorial from "./Tutorial";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/tutorial" component={Tutorial} />
      <Route path="/camera" component={Camera} />
    </Router>
  );
}

export default AppRouter;
