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

    getApi();
  }, []); // No dependencies needed here

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

  // Rest of the component code remains the same...
}
