import React, {useState} from "react";
import { ChoiceProps } from './interface/components'

export default function Choice(props:ChoiceProps){
    const {checkAnswer,choices}=props;

    return(
        <div className='choices-container'>
            {choices.map((val)=>{
                return(
                        <button
                            key={val.answer_text}
                            className='choice'
                            title={val.answer_text}
                            onPress={() => checkAnswer(val.correct)}/>
                );
            })}
        </div>
    );
}