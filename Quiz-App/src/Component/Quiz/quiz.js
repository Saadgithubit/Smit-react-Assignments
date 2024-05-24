import { useEffect, useState } from "react";
import './quiz.css';
import { useDispatch, useSelector } from "react-redux";
import { updateColor } from "../../Store/colorSlice";

function Quiz() {
  const [question, setQuestion] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [minute, setMinute] = useState(null);
  const [sec, setSec] = useState(59);
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();
  const fontColor = useSelector(state => state.color);

  useEffect(() => {
    getApi();
  }, []); // Add getApi as a dependency if it's defined outside the useEffect

  function getApi() {
    fetch("https://the-trivia-api.com/v2/questions")
      .then((res) => res.json())
      .then((res) => {
        res.forEach((item) => {
          item.options = [...item.incorrectAnswers, item.correctAnswer];
          shuffle(item.options);
        });
        setQuestion(res);
      });
  }

  function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  useEffect(() => {
    let timer;
    if (minute !== null && minute >= 0) {
      timer = setInterval(() => {
        setSec(sec => {
          if (sec === 0) {
            if (minute === 0) {
              clearInterval(timer);
              alert('Time is up');
              setCurrentIndex(question.length - 1);
              setMinute(null);
              return 0;
            } else {
              setMinute(minute => minute - 1);
              return 59;
            }
          } else {
            return sec - 1;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [minute, question.length]);

  function start() {
    setToggle(true);
    setMinute(4);
  }

  function next() {
    if (selectedOption !== null) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      alert('Please Select Any Option');
    }
  }

  function checkAnswer(option) {
    setSelectedOption(option);
    if (option === question[currentIndex].correctAnswer) {
      setScore(score + 1);
    }
  }

  function restart() {
    setCurrentIndex(0);
    setMinute(4);
    setSec(59);
    setScore(0);
  }

  const isLastQuestion = currentIndex < question.length;

  if (!question.length) {
    return <div>Loading....</div>;
  }

  return (
    <div className="main">
      <div className="theme">
        <h3 className="theme-font">FontColor</h3>
        <div className="black-box" onClick={() => dispatch(updateColor('black'))}></div>
        <div className="white-box" onClick={() => dispatch(updateColor('white'))}></div>
      </div>
      <div className="App" style={{ color: fontColor }}>
        <h1>Quiz App</h1>

        <div className="App-header">
          {isLastQuestion ? (
            <div className="counting-ques">
              <span className="span">Total Questions {question.length}/{currentIndex + 1}</span>
              <span className="span">Passing Score 70%</span>
            </div>
          ) : (
            <h4>Quiz End</h4>
          )}
          <h3>
            {minute !== null ? <span>{minute} : {sec}</span> :
              <span>5 : 00</span>}
          </h3>
          {!toggle ? (
            <button onClick={start}>Start Quiz</button>
          ) : (
            <div className="quiz">
              {isLastQuestion ? (
                <div className="question-div">
                  <h2>
                    Q:{currentIndex + 1} {question[currentIndex].question.text}
                  </h2>
                  {question[currentIndex].options.map((option, index) => (
                    <p key={index}>
                      <input
                        type="radio"
                        name='options'
                        checked={selectedOption === option}
                        onChange={() => checkAnswer(option)}
                      />
                      {option}
                    </p>
                  ))}
                  <button onClick={next}>Next</button>
                </div>
              ) : (
                <div>
                  <p>Your Score Is {(score * 100) / question.length}%</p>
                  <button onClick={restart}>Restart</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
