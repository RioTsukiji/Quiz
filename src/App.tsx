import React from 'react';
import logo from './logo.svg';
import './App.css';
import Choices from "./Choices";

interface Props{
    name:string;
}

const choicesList=[
  {name:'a'},
  {name:'b'},
  {name:'c'},
  {name:'d'},
]

function App(props:Props) {
  return (
    <div className="App">
      <div className='question-container'>
        <h1>Quiz</h1>
        <h2>Q.What is the most efficient way to solve global warming problems.</h2>
      </div>
      <div className='choices-container'>
        {choicesList.map((choiceItem)=>{
          return(
              <Choices
                name={choiceItem.name}
                />
          );
        })}
      </div>
    </div>
  );
}

export default App;