import React from 'react';
import './stylesheet.css';
import Choice from './Choices'
import { useState, useEffect } from 'react';
import Question from "./Question";
import { Problem } from './interface/models';
import {questions} from "./data";

function App() {

    const number = Math.floor(Math.random()*2);

  return (
    <div className="App">
            <Question number={number}/>
            <Choice number={number}/>
    </div>
  );
}

export default App;
