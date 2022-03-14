import React, {useEffect,useState} from "react";
import {ChoiceProps, JudgmentProps} from './interface/components'
import db from "../firebase";
import {QuestionProps} from "./interface/components";
import {collection,getDocs} from "firebase/firestore";

export default function Choice(props:ChoiceProps){
    const {checkAnswer,choices}=props;
    const [show,setShow]=useState(false);
    const [choice,setChoice]=useState([]);

    const Judgment = (props: JudgmentProps) => {
        const { correct } = props;

        /*useEffect(()=>{
            const questionData = collection(db,"choices");
            getDocs(questionData).then((snapShot)=> {
                setChoice(snapShot.docs.map((doc) => ({...doc.data()})));
            });
        },[]);*/

        if(show) {
            return (
                <div id="overlay" className="Judgement">
                    {correct ?
                        <div className="container">
                            <h2>正解</h2>
                        </div>
                        :
                        <div className="container">
                            <h2>不正解</h2>
                        </div>
                    }
                </div>
            )
        }else{
            return null;
        }
    };

    return(
        <div className='choices-container'>
            {choices.map((val)=>{
                return(
                        <>
                        <button
                            key={val.answer}
                            className='choice'
                            title={val.answer}
                            onClick={() => {checkAnswer(val.correct); setShow(true)}}/>
                        <Judgment correct={val.correct}/>
                        </>
                );
            })}
        </div>
    );
}