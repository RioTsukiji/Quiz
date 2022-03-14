import React from 'react';
import './App.css';
import Choice from './Choices'
import { useState, useEffect } from 'react';
import Question from "./Question";
import { Problem } from './interface/models';
import { AnswerProps } from './interface/components';



function App(props:AnswerProps) {
    const { route } = props;

    const [correct, setCorrect] = useState(false);
    const [visible, setVisible] = useState(false);
    const [last, setLast] = useState(false);
    const [count, setCount] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [questions] = useState<Problem[]>(route.params.props);

    const checkAnswer = (flag: boolean) => {
        if (flag) {
            setCorrect(true);
        } else {
            setCorrect(false);
        }
    }

  return (
    <div className="App">
            <Question questionText={questions[count].question}/>
            <Choice choices={questions[count].choices} checkAnswer={checkAnswer}/>
    </div>
  );
}

export default App;

