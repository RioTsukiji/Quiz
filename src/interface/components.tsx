import { Choice } from './models';

export interface ChoiceProps {
    choices: Choice[];
    checkAnswer: (flag: boolean) => void;
}

export interface QuestionProps {
    questionText: string;
}

export interface JudgmentProps {
    correct: boolean;
}

export interface Number{
    number: number;
}