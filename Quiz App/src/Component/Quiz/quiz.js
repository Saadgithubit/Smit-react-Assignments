import { useEffect, useState } from "react";
import './quiz.css'
import { useDispatch,useSelector } from "react-redux";
import { updateColor } from "../../Store/colorSlice";

function Quiz(){
    const [question, setquestion] = useState([]);
    const [currentIndex, setcurrentIndex] = useState(0);
    const [score, setscore] = useState(0);
    const [toggle, settoggle] = useState(false);
    const [minute, setminute] = useState(null);
    const [sec, setsec] = useState(59);
    const [selectedOption, setselectedOption] = useState(null)
    const [bgcolor , setbgcolor] = useState(false)
    const dispatch = useDispatch()
    const fontcolor = useSelector(state => state.color)
  
    useEffect(function () {
      getApi();
    }, []);
  
    function getApi() {
      fetch("https://the-trivia-api.com/v2/questions")
        .then((res) => res.json())
        // .then(res => console.log(res))
        .then((res) => 
        {
          res.map(function(item){
          item.options = [...item.incorrectAnswers , item.correctAnswer]
          shuffle(item.options)
        })
        setquestion(res)
          });
        
    }
  
    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
    
      // While there remain elements to shuffle.
      while (currentIndex > 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array;
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
        setbgcolor(true)
        setselectedOption(null)
      } else {
        alert('Please Select Any Option')
      }
  
    }
    
    function checkAnswer(option) {
      setselectedOption(option)
      if (option == question[currentIndex].correctAnswer) {
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
        return
        <div>Loading....</div>;
      }
      return (
        
        <div className="App" style={{color: fontcolor}}>
            <h1>Quiz App</h1>
          <div className="theme">
            <h3 className="theme-font">FontColor</h3>
            <div className="black-box" onClick={()=> dispatch(updateColor('black'))}></div>
            <div className="white-box" onClick={()=> dispatch(updateColor('white'))}></div>
          </div>
          <div className="App-header">
         {isLastQuestion ?<div className="counting-ques">
          <span className="span">Total Questions {question.length}/{currentIndex === 0 ? question.length:question.length-1}</span>
            <span className="span">Passing Score 70%</span>
            </div>:<h4>Quiz End</h4>}
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
                      Q:{currentIndex + 1} {question[currentIndex].question.text}
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
          </div>
        </div>
      )
    }


export default Quiz