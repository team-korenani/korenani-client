import React from "react";
import Webcam from "react-webcam";
import Button from "react-bootstrap/Button";
import "./Camera.css";
import { setImageData } from "./state/actions/index";
import { connect } from "react-redux";

class Camera extends React.Component {
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    this.props.setImgData(imageSrc);
  };

  render() {
    return (
      <div className="video-container">
        <Webcam
          className="video"
          audio={false}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
        />
        <Button className="capture" onClick={this.capture}>
          Snap!
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    imgData: state.imgData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setImgData: data => {
      dispatch(setImageData(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Camera);
