import React, { useState } from "react";
import QuizQuestions from "../Components/QuizQuestion";
import QuizDetail from "../Components/QuizDetail";
import QuizResult from "../Components/QuizResult";

export default function Quiz() {
  const [showQuiz, setShowQuiz] = useState(true);
  const [userAnswers, setUserAnswers] = useState({});

  const handleRestart = () => {
    setShowQuiz(true);
    setUserAnswers({});
  };

  return (
    <div>
      {showQuiz ? (
        <QuizDetail
          questions={QuizQuestions}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          setShowQuiz={setShowQuiz}
        />
      ) : (
        <QuizResult
          questions={QuizQuestions}
          userAnswers={userAnswers}
          handleRestart={handleRestart}
        />
      )}
    </div>
  );
}
