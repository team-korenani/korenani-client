import React from "react";
import { connect } from "react-redux";
import "./styles/Result.scss";
import axios from "axios";

class Result extends React.Component {
  componentDidMount = async () => {
    const result = await axios({
      url: "http://korenani-server.herokuapp.com/api/photos",
      method: "post",
      data: { image: this.props.imgData }
    });
  };

  render() {
    return (
      <div className="Result">
        <div className="Result-photo-container">
          <img className="photo" src={this.props.imgData} alt="result" />
        </div>
        <div className="Result-cards-container">
          <p>RESULTS</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    imgData: state.imgData
  };
};

export default connect(mapStateToProps)(Result);
