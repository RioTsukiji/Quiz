import React, {useState} from "react";
import {questions} from "./data";

type Props={
    number:number;
}

const Choice: React.FC<Props> = (props) =>{
    const [show,setShow]=useState(false);
    let tfNumber = 0 ;

    const Judgment = () => {
        if(show) {
            return (
                    questions[props.number][tfNumber].tf ?
                        <div id="overlay" className="Judgement">
                            <h1>正解</h1>
                            <button
                                //key={val.answer}
                                className='modal__closeBtn'
                                title="close"
                                onClick={() => {
                                    setShow(false)
                                }}
                            >
                                close
                            </button>
                        </div>
                        :
                        <div id="overlay" className="Judgement">
                            <h1>不正解</h1>
                            <button
                                //key={val.answer}
                                className='modal__closeBtn'
                                title="close"
                                onClick={() => {
                                    setShow(false)
                                }}
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
                            onClick={() => { setShow(true); tfNumber += 1; }}
                        >
                            {questions[props.number][1].choice}
                        </button>
                        <button
                            //key={val.answer}
                            className='choice'
                            title="b"
                            onClick={() => { setShow(true); tfNumber += 2; }}
                        >
                            {questions[props.number][2].choice}
                        </button>
                        <button
                            //key={val.answer}
                            className='choice'
                            title="c"
                            onClick={() => { setShow(true); tfNumber += 3; }}
                        >
                            {questions[props.number][3].choice}
                        </button>
                        <button
                            //key={val.answer}
                            className='choice'
                            title="d"
                            onClick={() => { setShow(true); tfNumber += 4; }}
                        >
                            {questions[props.number][4].choice}
                        </button>
        </div>
            <Judgment/>
        </>
    );
}

export default Choice;