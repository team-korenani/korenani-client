import React from "react";
import { connect } from "react-redux";
import "./styles/Result.scss";
import axios from "axios";

class Result extends React.Component {
  componentDidMount = async () => {
    const result = await axios({
      url: "http://korenani-server.herokuapp.com/api/photos",
      method: "post",
      data: { image: this.props.imgData, keywords: this.props.keywords }
    });
  };

  render() {
    return (
      <div className="Result">
        <div className="Result-photo-container">
          <img className="photo" src={this.props.imgData} alt="result" />
        </div>
        <div className="Result-cards-container">
          {this.props.keywords.map(word => {
            return (
              <div className="Result-cards">
                <span className="Result-cards-container-en">{word.en}</span>
                <span className="Result-cards-container-ja"> ({word.ja})</span>
                <p>Example Sentences</p>
                {word.ex.map(ex => {
                  return (
                    <ul>
                      <li>{ex}</li>
                    </ul>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    imgData: state.imgData,
    keywords: state.keywords
  };
};

export default connect(mapStateToProps)(Result);
