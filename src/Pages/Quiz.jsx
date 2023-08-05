import React, {useState} from 'react'
import QuizQuestions from '../Components/QuizQuestion';
import QuizDetail from '../Components/QuizDetail'
import QuizResult from '../Components/QuizResult'

export default function Quiz() {
  const [showQuiz, setShowQuiz] = useState(true);
  const [userAnswers, setUserAnswers] = useState({});

  const handleRestart = () => {
    // Reset the state to show the quiz again
    setShowQuiz(true);
    setUserAnswers({});
  };
  return (

    <div>
  {showQuiz ? (
        // Show the QuizDetail component if showQuiz is true
        <QuizDetail 
        questions={QuizQuestions}
        userAnswers={userAnswers}
        setUserAnswers={setUserAnswers}
        setShowQuiz={setShowQuiz}
        />
      ) : (
        // Show the QuizResult component if showQuiz is false
        <QuizResult
        questions={QuizQuestions} 
        userAnswers={userAnswers} 
         handleRestart={handleRestart}
          />
      )}

    </div>
  )
}


 