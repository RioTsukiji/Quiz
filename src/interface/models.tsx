
export interface Problem {
    choices: Choice[];
    question: string;
}

export interface Choice {
    answer: string;
    correct: boolean;
    question_id: string;
}

export interface Question {
    id: string;
    question: string;
}