import React from "react";
import App from "./App";
import Camera from "./Camera";
import Tutorial from "./Tutorial";
import Result from "./Result";
import { BrowserRouter as Router, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/tutorial" component={Tutorial} />
      <Route path="/camera" component={Camera} />
      <Route path="/result" component={Result} />
    </Router>
  );
}

export default AppRouter;
