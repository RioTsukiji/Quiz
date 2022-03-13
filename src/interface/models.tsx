import firebase from 'firebase/app';

export interface Problem {
    choices: Choice[];
    question: string;
}

export interface Choice {
    answer_text: string;
    correct: boolean;
    question_id: string;
}

export interface Question {
    id: string;
    question: string;
}

export type SelectionFromFirestore = firebase.firestore.QuerySnapshot<Selection>;