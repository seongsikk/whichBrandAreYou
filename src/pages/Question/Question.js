import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

import testImage from '../../img/test.png'
import foodImage from '../../img/food.png'
import fridayImage from '../../img/friday.jpg'
import teamImage from '../../img/team.png'

import './Question.css';
import { Redirect } from "react-router-dom";

import {
  add_to_answers,
} from '../../ducks/answers';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      questions: [
        {
          "question": "시험 공부를 할때 나는",
          "answer1": "계획을 짜서 미리 미리 공부하는 편이다",
          "answer2": "시험 직전에 벼락치기 하는 편이다",
          "answer1Mbti": "J",
          "answer2Mbti": "P",
          "image": testImage,
        },
        {
          "question": "나는 친구들과 밥을 먹으면",
          "answer1": "뭘 먹을지 결정을 잘 못하는 편이다",
          "answer2": "내가 주로 메뉴를 결정한다",
          "answer1Mbti": "P",
          "answer2Mbti": "J",
          "image": foodImage,
        },
        {
          "question": "나는 평일에 바쁘게 일하고나면 금요일 밤에",
          "answer1": "집에서 혼자 음악을 들으며 쉬고싶다",
          "answer2": "친구들과 만나서 신나게 놀고싶다",
          "answer1Mbti": "I",
          "answer2Mbti": "E",
          "image": fridayImage,
        },
        {
          "question": "학교에서 팀 프로젝트를 한다면, 나는",
          "answer1": "내가 아이디어를 내는 것을 선호한다",
          "answer2": "다른 사람이 낸 아이디어를 실행하는 것이 좋다",
          "answer1Mbti": "N",
          "answer2Mbti": "S",
          "image": teamImage,
        },
        {
          "question": "친구가 나에게 새로 나온 기계의 사용법을 설명해준다면",
          "answer1": "최대한 자세하고 상세하게 알려주는 것이 좋다",
          "answer2": "필수 기능들만 간략하게 알려주는 것이 좋다",
          "answer1Mbti": "S",
          "answer2Mbti": "N",
          "image": teamImage,
        },
        {
          "question": "친한 친구가 나에게 자기 애인을 욕한다. 친구의 이야기를 듣고, 나는",
          "answer1": "친구 편에 서서 같이 욕해준다",
          "answer2": "내 생각엔 누가 잘못한건지 말해준다",
          "answer1Mbti": "F",
          "answer2Mbti": "T",
          "image": teamImage,
        },
        {
          "question": "드디어 코로나19가 잠잠해지고 오랜만에 여행 티켓을 끊었다. 여행 계획을 짤때 나는",
          "answer1": "가보고 싶은 곳 리스트를 적고 간다",
          "answer2": "시간과 날짜별로 세분화 해서 적는다",
          "answer1Mbti": "P",
          "answer2Mbti": "J",
          "image": teamImage,
        },
        {
          "question": "사람들이 많은 동창회나 모임에 가면, 나느 주로",
          "answer1": "원래 알던 친구들과만 얘기한다",
          "answer2": "새로운 사람들을 만나고 얘기하는 것을 좋아한다",
          "answer1Mbti": "I",
          "answer2Mbti": "E",
          "image": teamImage,
        },
        {
          "question": "누군가 인생과 세상의 진정한 의미가 무엇인지에 대한 얘기를 시작하면",
          "answer1": "재미가 없고 쓸데 없는 얘기라고 생각한다",
          "answer2": "나도 그 사람의 철학적인 대화에 동참한다",
          "answer1Mbti": "S",
          "answer2Mbti": "N",
          "image": teamImage,
        },
        {
          "question": "나는 친구랑 있을때",
          "answer1": "말을 하기보다는 많이 듣는 편이다",
          "answer2": "내가 말을 많이 하는 편이다",
          "answer1Mbti": "I",
          "answer2Mbti": "E",
          "image": teamImage,
        },
        {
          "question": "누군가가 나에게 피해를 입히면",
          "answer1": "언젠간 반드시 복수한다",
          "answer2": "용서해 주거나 까먹는다",
          "answer1Mbti": "T",
          "answer2Mbti": "F",
          "image": teamImage,
        },
        {
          "question": "어떤 주제에 대해 친구와 이야기하다가 의견충돌이 생겼다. 이때 나는",
          "answer1": "친구랑 싸우더라도 문제를 해결하는 편이다",
          "answer2": "싸움을 피하기 위해 내가 양보하는 편이다",
          "answer1Mbti": "T",
          "answer2Mbti": "F",
          "image": teamImage,
        },
      ]
    }
    this.incrementQuestionNumber = this.incrementQuestionNumber.bind(this);
    this.saveAnswer = this.saveAnswer.bind(this);
  }

  incrementQuestionNumber() {
    let questionNumber = this.state.questionNumber;
    this.setState({ questionNumber: questionNumber + 1 });
  }

  saveAnswer(response) {
    this.props.add_to_answers(response);
  }

  render() {
    if (this.state.questionNumber === 12) {
      return (
        <Redirect to="/result" />
      )
    }

    let question = this.state.questions[this.state.questionNumber].question;
    let answer1 = this.state.questions[this.state.questionNumber].answer1;
    let answer2 = this.state.questions[this.state.questionNumber].answer2;
    let answer1Mbti = this.state.questions[this.state.questionNumber].answer1Mbti;
    let answer2Mbti = this.state.questions[this.state.questionNumber].answer2Mbti;
    let imageUrl = this.state.questions[this.state.questionNumber].image;

    return (
      <div className="Question">
        <div className="Question-header">
          <div className="QuestionNumberHeader">
            <p className="QuestionNumbers">
              #{this.state.questionNumber+1}
            </p>
            <p className="QuestionNumbers">
              {this.state.questionNumber+1}/12
            </p>
          </div>
          <p className="Question-Text">
            {question}
          </p>
          {/* <div className="Img-Container">
            <img className="Img" src={imageUrl} />
          </div> */}
          <div className="Button-Container">
            <Button color="primary" onClick={() => { this.incrementQuestionNumber(); this.saveAnswer(answer1Mbti)}}>
              {answer1}
            </Button>
            <Button onClick={() => { this.incrementQuestionNumber(); this.saveAnswer(answer2Mbti)}}>
              {answer2}
            </Button>
          </div>
        </div>
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

export default Question = connect(mapStateToProps, {
  add_to_answers,
})(Question);
