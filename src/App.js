import React from "react";
import logo from "./logo.png";
import Navbar from "./Navbar";
import "./App.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-container">
        <section className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        <section className="splash-page-section">
          <Link to={"./tutorial"}>
            <Button className="splash-page-button" variant="secondary">
              Snap and Learn
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default App;
