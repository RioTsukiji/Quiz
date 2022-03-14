import React, {useEffect, useState} from 'react';
import db from "../firebase";
import {QuestionProps} from "./interface/components";
import {collection,getDocs} from "firebase/firestore";

export default function Question(){
    const [questions,setQuestions]=useState([]);

    /*useEffect(()=>{
        const questionData = collection(db,"questions");
        getDocs(questionData).then((snapShot)=> {
            setQuestions(snapShot.docs.map((doc) => ({...doc.data()})));
        });
    },[]);*/

    return (
        <div className='question-container'>
            <h1>Quiz</h1>
            <h2>Q. What is the most efficient way to solve global warming problems.</h2>
        </div>
    );
}