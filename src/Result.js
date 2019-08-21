import React from "react";
import { connect } from "react-redux";

class Result extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.imgData} alt="result" />
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
