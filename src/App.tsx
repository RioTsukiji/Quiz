import React from 'react';
import './stylesheet.css';
import Choice from './Choices'
import { useState, useEffect } from 'react';
import Question from "./Question";
import { Problem } from './interface/models';
import {questions} from "./data";

function App() {

    const number = Math.floor(Math.random()*2);

    const [correct, setCorrect] = useState(false);
    const [visible, setVisible] = useState(false);
    const [last, setLast] = useState(false);
    const [count, setCount] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    //const [questions] = useState<Problem[]>(route.params.props);

    const checkAnswer = (flag: boolean) => {
        if (flag) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    }

  return (
    <div className="App">
            <Question number={number}/>
            <Choice number={number}/>
    </div>
  );
}

export default App;
