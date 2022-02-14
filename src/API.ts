import { shuffleArray } from './utils';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export type QuestionState = Question & { answers: string[] }

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
  const ENDPOINT = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const DATA = await (await fetch(ENDPOINT)).json();
  console.log(DATA);
  return DATA.results.map((question: Question) => (
    {
      ...question,
      answers: shuffleArray([question.correct_answer, ...question.incorrect_answers])
    }
  ));
}
