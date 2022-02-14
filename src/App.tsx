import React, {useState} from 'react';

import { QuestionState, fetchQuizQuestions, Difficulty } from './API';

import QuestionCard from './components/QuestionCard';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const NEW_QUESTIONS = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(NEW_QUESTIONS);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver) {
      let answer = e.currentTarget.value;
      let correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore(prev => prev + 1);
      }
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  } 

  const nextQuestion = () => {
    let nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      {gameOver || userAnswers.length == TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia} >
          Start
        </button>
      ) : null}

      {!gameOver ? <p className='score'>Score: {score}</p> : null}
      {loading ? <p>Loading Questions...</p> : null}
      {!loading && !gameOver ?
        <QuestionCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number]?.question}
          answers={questions[number]?.answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      : null}
      {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ?
        <button className='next' onClick={nextQuestion}>
          Next Question
        </button>
      : null}
    </div>
  );
}

export default App;