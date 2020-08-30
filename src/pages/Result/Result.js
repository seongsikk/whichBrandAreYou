import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import './Result.css';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mbtiToCeleb: {
        "INTJ": "Chanel",
        "INTP": "Hermes",
        "ENTJ": "Rolex",
        "ENTP": "Thom Browne",

        "INFJ": "Gucci",
        "INFP": "YSL",
        "ENFJ": "Louis Vuitton",
        "ENFP": "Versace",

        "ISTJ": "Givenchy",
        "ISFJ": "Tiffany & Co.",
        "ESTJ": "Fendi",
        "ESFJ": "Prada",

        "ISTP": "Burberry",
        "ISFP": "Dior",
        "ESTP": "Balenciaga",
        "ESFP": "Valentino",
      }
    }
  }

  mapToMbti() {
    let mbti = ""

    if (this.props.answersList.filter(i => i === "I").length > 1) {
      mbti += "I";
    } else {
      mbti += "E";
    }

    if (this.props.answersList.filter(i => i === "N").length > 1) {
      mbti += "N";
    } else {
      mbti += "S";
    }

    if (this.props.answersList.filter(i => i === "F").length > 1) {
      mbti += "F";
    } else {
      mbti += "T";
    }

    if (this.props.answersList.filter(i => i === "J").length > 1) {
      mbti += "J";
    } else {
      mbti += "P";
    }

    return mbti;
  }

  getCeleb() {
    let mbti = this.mapToMbti();
    let celeb = this.state.mbtiToCeleb[mbti];
    return celeb;
  }

  render() {
    return (
      <div className="Result">
        <header className="Result-header">
          <p>
            {this.getCeleb()}
          </p>
          <div className="Button-container">
            <Link to="/">
              <Button>
                  다시하기!
              </Button>
            </Link>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { answers } = state;
  const { answersList } = answers;
  return {
    ...ownProps,
    answersList
  };
};

export default Result = connect(mapStateToProps)(Result);