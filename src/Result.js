import React from "react";
import { connect } from "react-redux";
import "./styles/Result.scss";
import axios from "axios";
import { base64ToBlob } from "base64-blob";
import { setResultData } from "./state/actions/index";

class Result extends React.Component {
  componentDidMount = async () => {
    const blob = await base64ToBlob(this.props.imgData);
    const visualFeatureData = await axios({
      method: "post",
      url:
        "https://microsoft-azure-microsoft-computer-vision-v1.p.rapidapi.com/analyze?visualfeatures=Tags",
      headers: {
        "X-RapidAPI-Host":
          "microsoft-azure-microsoft-computer-vision-v1.p.rapidapi.com",
        "X-RapidAPI-Key": "9c08531baamsh9b76aff3da43eacp161185jsn135ce75ad624",
        "Content-Type": "application/octet-stream"
      },
      data: blob
    });

    const worthyKeywords = visualFeatureData.data.tags
      .filter(item => item.confidence > 0.85)
      .map(item => {
        return item.name;
      });

    axios({
      url: "http://korenani-server.herokuapp.com/api/photos",
      method: "post",
      data: { keywords: worthyKeywords }
    })
      .then(res => {
        this.props.setResultData(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(
          "There was an error sending the keywords to the server",
          err
        );
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

const mapDispatchToProps = dispatch => {
  return {
    setResultData: data => {
      dispatch(setResultData(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);
