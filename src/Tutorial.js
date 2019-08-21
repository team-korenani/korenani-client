import React from "react";
import Navbar from "./Navbar";
import "./Tutorial.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Tutorial() {
  return (
    <div>
      <Navbar />
      <div className="Tutorial-container">
        <div className="Tutorial-box">
          <h1>How to use:</h1>
          <p>1. Take a photo of anything you want</p>
          <p>
            2. Using Machine Learning, Korenani will try to guess what is in the
            picture
          </p>
          <p>3. We will then teach you words based on your picture.</p>
        </div>
      </div>
      <div className="button-container">
        <Link to={"./camera"}>
          <Button className="tutorial-page-button" variant="secondary">
            Got it!
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Tutorial;
