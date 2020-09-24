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
          "question": "당신의 성별은 무엇인가요?",
          "answer1": "저는 남자입니다.",
          "answer2": "저는 여자입니다.",
        },
        {
          "question": "3년 교제한 애인과 오늘 헤어진 당신. \
          여러가지 기분이 함께 몰려오는데... \
          오늘 밤 당신은 무엇을 할 것인가?",
          "answer1": "씁쓸하니 집에서 조용히 시간을 보냅니다.",
          "answer2": "우선 집 밖을 나가 친구든 새로운 인연이든 누구를 만납니다.",
          "answer1Mbti": "I",
          "answer2Mbti": "E",
          "image": testImage,
        },
        {
          "question": "눈 앞을 지나가는 옛 애인. \
          그런데 그 옆에서 낯선 이성과 웃으며 팔짱을 끼고 가는데...? \
          화를 참지 못한 당신은 어떻게 할 것인가?",
          "answer1": "애인의 뺨을 때립니다.",
          "answer2": "애인의 새 애인의 뺨을 때립니다.",
          "answer1Mbti": "S",
          "answer2Mbti": "N",
          "image": foodImage,
        },
        {
          "question": "쾅 쾅 쾅. 늦은 저녁 낯선 이성이 당신의 집문을 두드린다. \
          틈새로 보이는 피투성이의 몸. 다급하게 떨리는 말투로 도움을 청하는 것 같다. \
          당신은 어떻게 행동할 것인가?",
          "answer1": "사람부터 살려야죠. 우선 안으로 들여 보내줄 것 같아요.",
          "answer2": "이성적으로 누군지도 모르는데 어떻게 도와줄 수 있겠어요.",
          "answer1Mbti": "F",
          "answer2Mbti": "T",
          "image": fridayImage,
        },
        {
          "question": "한가로운 주말. 그리고 \
          전쟁 같던 한 주를 적나라하게 보여주는 지저분한 당신의 방구석. \
          당신은 어떻게 행동 할 것인가?",
          "answer1": "앙 몰랑. 침대가 제일 좋아. 이제 겨우 10시인데 좀만 더 잘래요.",
          "answer2": "밀린 빨래부터 좀 돌리고 방 환기를 시켜요.",
          "answer1Mbti": "P",
          "answer2Mbti": "J",
          "image": teamImage,
        },
        {
          "question": "갑작스럽게 찾아온 정체불명의 한 남자. \
          어렸을 때 돌아가셨다고 들었던 아버지라며 말을 걸어오는데.. \
          당신은 어떤 생각이 들지?",
          "answer1": "눈매며 반곱슬에 입술 두꺼운 것까지 왠지 모르게 낯설 지는 않아요.",
          "answer2": "머리카락 뽑아보고 유전자 검사 하기 전까지는 못믿을 것 같아요.",
          "answer1Mbti": "N",
          "answer2Mbti": "S",
          "image": teamImage,
        },
        {
          "question": "끝이 보이지 않는 야근. \
          눈 앞에는 묵묵히 일에 몰입해있는 직장 상사. \
          어느덧 저녁 9시 17분. 보고를 올린 후 당신이 상사로부터 듣고싶은 대답은?",
          "answer1": "많이 피곤하지? (웃으며 비타500을 건네준다.) 늘 고마워. 얼른 집에가서 쉬어.",
          "answer2": "데이터 값 정리가 완벽한데? 수고했어. 얼른 퇴근해",
          "answer1Mbti": "F",
          "answer2Mbti": "T",
          "image": teamImage,
        },
        {
          "question": "고된 일상을 뒤로하고 에너지를 찾기 위해 떠나는 여행. \
          마침 통장에는 여유금도 잔뜩 쌓여있는데… \
          당신은 여행지는 어디인가?",
          "answer1": "조용한 굴뚝연기 모락모락 피는 핀란드의 자그만한 항구 마을",
          "answer2": "낮보다 더 빛나는 밤을 가진 활기가득한 스페인의 음악 마을",
          "answer1Mbti": "I",
          "answer2Mbti": "E",
          "image": teamImage,
        },
        {
          "question": "후계자 자리를 차지하기 위해 고군분투하는 당신과 세명의 잔인한 형제들. \
          한 순간도 긴장을 놓칠 수 없는 날들의 연속. \
          당신은 어떻게 행동 할 것인가?",
          "answer1": "형제들 한명 한명 계획적으로 제거해 갑니다.",
          "answer2": "누구든지 눈 앞에 보이는대로 밟고 지나갑니다.",
          "answer1Mbti": "J",
          "answer2Mbti": "P",
          "image": teamImage,
        },
        {
          "question": "반복되는 당신의 실수에 지쳐버린 애인. \
          잠깐 시간을 가지자는 문자를 마지막으로 3 시간째 당신의 연락을 안읽씹 하는데… \
          애인의 화를 풀기위해 당신은 어떤 선택을 할 것인가?",
          "answer1": "글로는 내 미안한 마음을 다 표현 못할 것 같아요. 전화를 계속 해봅니다.",
          "answer2": "정성 꾹꾹 담아 문자를 길게 보낸 후 조용히 연락을 기다려요.",
          "answer1Mbti": "E",
          "answer2Mbti": "I",
          "image": teamImage,
        },
        {
          "question": "최근에 알게된 박사님 한분이 타임머신을 발명했다고 한다. \
          두 번 다시 찾아오지 않을 탑승의 기회를 주는데.. \
          당신은 어떤 선택을 할 것인가?",
          "answer1": "과거로 돌아가 미래를 바꿉니다.",
          "answer2": "못미더우니 타임머신을 타지 않습니다.",
          "answer1Mbti": "N",
          "answer2Mbti": "S",
          "image": teamImage,
        },
        {
          "question": "오늘은 당신의 집들이 날. \
          사실은 집들이를 빌미로 썸을 초대해 근사한 저녁을 준비했는데… \
          아 불싸… 제일 아끼는 그릇을 깨뜨려 버린 썸남(녀). \
          당신은 어떻게 행동 할 것인가?",
          "answer1": "썸은 썸인데 돈은 돈. 사로 문자로 그릇 값을 청구할 거예요.",
          "answer2": "미안해 하는 모습마저 귀여워… 쿨허게 넘어가죠 뭐.",
          "answer1Mbti": "T",
          "answer2Mbti": "F",
          "image": teamImage,
        },
        {
          "question": "생계를 위해 치킨집을 개업하게 된 당신. \
          다른건 몰라도 맛 하나만큼은 확실한 당신의 후라이드 치킨. \
          당신의 영업 전략은?",
          "answer1": "상가의 유동 인구 및 니즈를 확실하게 파악하고 측정된 데이터를 기반으로 장사를 할거예요.",
          "answer2": "전 오로지 제 손맛으로 승부를 보겠습니다. 장사 하다보면 알아서 다 척척 되겠죠.",
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
    if (this.state.questionNumber === 13) {
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
            <p className="QuestionNumbersOutOf">
              {this.state.questionNumber+1}/13
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
