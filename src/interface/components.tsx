import { Choice } from './models';

export interface ChoiceProps {
    choices: Choice[];
    checkAnswer: (flag: boolean) => void;
}

export interface QuestionProps {
    questionText: string;
}

export interface AnswerProps {
    route: any;
}

export interface JudgmentProps {
    correct: boolean;
}