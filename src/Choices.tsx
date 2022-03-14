import React, {useEffect,useState} from "react";
import {ChoiceProps, JudgmentProps} from './interface/components'
import db from "../firebase";
import {QuestionProps} from "./interface/components";
import {collection,getDocs} from "firebase/firestore";

export default function Choice(){
    //const {checkAnswer,choices}=props;
    const [show,setShow]=useState(false);
    const [choice,setChoice]=useState([]);

    const Judgment = () => {

        /*useEffect(()=>{
            const questionData = collection(db,"choices");
            getDocs(questionData).then((snapShot)=> {
                setChoice(snapShot.docs.map((doc) => ({...doc.data()})));
            });
        },[]);*/

        if(show) {
            return (
                <div id="overlay" className="Judgement">
                    <h1>正解</h1>
                    <button
                        //key={val.answer}
                        className='modal__closeBtn'
                        title="close"
                        onClick={() => { setShow(false) }}
                    >
                        close
                    </button>
                </div>
            )
        }else{
            return null;
        }
    };

    return(
        <>
        <div className='choices-container'>
                        <button
                            //key={val.answer}
                            className='choice'
                            title="a"
                            onClick={() => { setShow(true) }}
                        >
                            a
                        </button>
                        <button
                            //key={val.answer}
                            className='choice'
                            title="b"
                            onClick={() => { setShow(true) }}
                        >
                        b
                        </button>
                        <button
                            //key={val.answer}
                            className='choice'
                            title="c"
                            onClick={() => { setShow(true) }}
                        >
                        c
                        </button>
                        <button
                            //key={val.answer}
                            className='choice'
                            title="d"
                            onClick={() => { setShow(true) }}
                        >
                        d
                        </button>
        </div>
            <Judgment/>
        </>
    );
}