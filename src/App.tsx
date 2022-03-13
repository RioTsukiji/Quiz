import React from 'react';
import logo from './logo.svg';
import './App.css';
import Choice from './Choices'
import { useState, useEffect } from 'react';
import {Question} from "./Question";
import { LoadingSpinner } from './LoadingSpinner';
import { Problem } from './interface/models';
import { AnswerProps } from './interface/components';
import { Judgment } from "./Judgement";



function App(props:AnswerProps) {
    const { route } = props;

    const [correct, setCorrect] = useState(false);
    const [visible, setVisible] = useState(false);
    const [last, setLast] = useState(false);
    const [count, setCount] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [questions] = useState<Problem[]>(route.params.props);

    /*useEffect(() => {
        // ユーザーが回答が終了していた場合スピナーを表示させて1秒後に結果画面へ遷移させる
        if (questions.length <= count) {

            setTimeout(() => {
                setLast(true);
            }, 800);

            setTimeout(() => {
                gotoAnswer();
            }, 1800);
        }
    }, [count]);*/

    const checkAnswerAndAddCount = (flag: boolean) => {
        setVisible(true);
        // 正答数のカウント
        if (flag) {
            setCorrectCount(correctCount+1);
            setCorrect(true);
        } else {
            setCorrect(false);
        }
        setCount(count+1);

        setTimeout(() => {
            setVisible(false);
        }, 800);
    }

    /*const gotoAnswer = () => {
        navigation.navigate('Result', {
            props: correctCount,
        });
    }*/

  return (
    <div className="App">
        {questions.length - 1 >= count && !visible ? (
            <>
            <Question questionText={questions[count].question}/>
            <Choice choices={questions[count].choices} checkAnswer={checkAnswerAndAddCount}/>
            </>
            ) : (
            <div className="spinnerContainer">
        { last ?
            <LoadingSpinner />
            :
            <Judgment correct={correct}/>
        }
            </div>
            )}
    </div>
  );
}

export default App;

