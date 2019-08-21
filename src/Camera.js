import React from "react";
import Webcam from "react-webcam";
import "./Camera.css";

export default class Camera extends React.Component {
  setRef = webcam => {
    this.webcam = webcam;
    this.state = {
      photoData: ""
    };
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.setState({
      photoData: imageSrc
    });
  };

  render() {
    return (
      <div className="video-container">
        <p>Hellloooooooo</p>
        <Webcam
          className="video"
          audio={false}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
        />
        <button className="capture" onClick={this.capture}>
          Snap!
        </button>
      </div>
    );
  }
}
