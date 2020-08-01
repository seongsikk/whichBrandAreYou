import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Result.css';

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mbtiToCeleb: {
        "INTJ": "지드래곤",
        "INTP": "기안84",
        "ENTJ": "지코",
        "ENTP": "펭수",

        "INFJ": "방탄소년단 정국",
        "INFP": "아이유",
        "ENFJ": "박준형",
        "ENFP": "홍진영",

        "ISTJ": "페이커",
        "ISFJ": "태연",
        "ESTJ": "박명수",
        "ESFJ": "유재석",

        "ISTP": "김종민",
        "ISFP": "민경훈",
        "ESTP": "싸이",
        "ESFP": "양세형",
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