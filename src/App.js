import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [question, setquestion] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [score, setscore] = useState(0);
  const [toggle, settoggle] = useState(false);
  const [minute, setminute] = useState(null);
  const [sec, setsec] = useState(59);
  const [selectedOption, setselectedOption] = useState(null)

  useEffect(function () {
    getApi();
  }, []);

  function getApi() {
    fetch("https://mocki.io/v1/443df9a7-e317-4dc9-b7a4-904ac0d439b3")
      .then((res) => res.json())
      .then((res) => setquestion(res));
    console.log(question);
  }

  useEffect(function () {
    let timer;
    if (minute !== null && minute >= 0) {
      timer = setInterval(() => {
        setsec(sec - 1);
        if (sec === 1) {
          setminute(minute - 1);
          setsec(59);

        }
        if (minute === 0 && sec === 1) {
          clearInterval(timer)
          alert('Time is up')
          setcurrentIndex(question.length - 1)
          setminute(null)
        }
        if(!isLastQuestion){
          clearInterval(timer)
          setminute(null)
        }
        return clearInterval(timer);

      }, 1000);
    }

  });

  function start() {
    settoggle(true)
    setminute(4)
  }
  function next() {
    if (selectedOption !== null) {
      setcurrentIndex(currentIndex + 1);
      setselectedOption(null)
    } else {
      alert('Please Select Any Option')
    }

  }

  function checkAnswer(option) {
    setselectedOption(option)
    if (option == question[currentIndex].correct_answer) {
      setscore(score + 1);
      console.log(option);
    }

  }

  function restart() {
    setcurrentIndex(0);
    setminute(4);
    setsec(59);
    setscore(0);
  }

  const isLastQuestion = currentIndex !== question.length;

  if (!question.length) {
    return;
    <div>Loading....</div>;
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz App</h1>
        <h3>
          {minute !== null ? <span>{minute} : {sec}</span> :
            <span>5 : 00</span>}
        </h3>
        {!toggle ? (<button onClick={start}>Start Quiz</button>
        ) : (
          <div className="quiz">
            {isLastQuestion ? (
              <div className="question-div">
                <h2>
                  Q:{currentIndex + 1} {question[currentIndex].question}
                </h2>
                {question[currentIndex].options.map(function (option) {
                  return (
                    <p>
                      <input type="radio" name='options' checked={selectedOption === option} onClick={() => checkAnswer(option)} />
                      {option}
                    </p>
                  );
                })}
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
      </header>
    </div>
  );
}

export default App;
