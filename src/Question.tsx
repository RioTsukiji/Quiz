import React from 'react';

interface QuestionProps {
    questionText: string;
}

export const Question = (question: QuestionProps) => {
    return (
        <div className='question-container'>
            <h1>Quiz</h1>
            <h2>{question.questionText}</h2>
        </div>
    );
}