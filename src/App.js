import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {

  const [question , setquestion] = useState([])
  const [currentIndex , setcurrentIndex] = useState(0)
  const [score , setscore] = useState(0)
  const [toggle , settoggle] = useState(true)

  useEffect(function () {
    getApi()
  } , [])
  
  function getApi(){
    fetch('https://mocki.io/v1/443df9a7-e317-4dc9-b7a4-904ac0d439b3')
    .then(res => res.json())
    .then(res => setquestion(res))
    console.log(question);
  }

  function next(){
    setcurrentIndex(currentIndex + 1)
    
   console.log(score);

  }

  function checkAnswer(option){
   console.log(option);
   if(option == question[currentIndex].correct_answer){
    setscore(score + 1)
   }
   console.log(score);
  }

  function restart(){
    setcurrentIndex(0)
  }

  const isLastQuestion = currentIndex !== question.length -1
  
if(!question.length){
  return
  <div>Loading....</div>
}
  return (
    <div className="App">
      <header className="App-header">
       <h1>Quiz App</h1>
      {isLastQuestion ? <div className='question-div'><h2>Q:{currentIndex + 1} {question[currentIndex].question}</h2>
      {question[currentIndex].options.map(function(option){
        return <p><input type='radio' name='options' onClick={() => checkAnswer(option)}/>{option}</p>
      })}
      <button onClick={next}>Next</button></div>
      : 
      <div>
          <p>Your Score Is {score * 100 / question.length}%</p>
        <button onClick={restart}>Restart</button>
        </div>
      }
        
      </header>
    </div>
  );
}

export default App;
