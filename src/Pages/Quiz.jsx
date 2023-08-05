// import React, {useState} from 'react'
// import QuizQuestions from '../Components/QuizQuestion';
// import QuizDetail from '../Components/QuizDetail'
// import QuizResult from '../Components/QuizResult'

// export default function Quiz() {
//   const [showQuiz, setShowQuiz] = useState(true);
//   const [userAnswers, setUserAnswers] = useState({});

//   const handleRestart = () => {
//     // Reset the state to show the quiz again
//     setShowQuiz(true);
//     setUserAnswers({});
//   };
//   return (

//     <div>
//   {showQuiz ? (
//         // Show the QuizDetail component if showQuiz is true
//         <QuizDetail 
//         question={QuizQuestions}
//         userAnswers={userAnswers}
//         setUserAnswers={setUserAnswers}
//         setShowQuiz={setShowQuiz}
//         />
//       ) : (
//         // Show the QuizResult component if showQuiz is false
//         <QuizResult
//         question={QuizQuestions} 
//         userAnswers={userAnswers} 
//          handleRestart={handleRestart}
//           />
//       )}

//     </div>
//   )
// }


  
// import React, { useState } from 'react';
// import QuizDetail from '../Components/QuizDetail';
// import QuizResult from '../Components/QuizResult';

// export default function Quiz() {
//   const [showQuiz, setShowQuiz] = useState(true);
//   const [correctAnswers, setCorrectAnswers] = useState(0);
//   const [wrongAnswers, setWrongAnswers] = useState(0);

//   const handleRestart = () => {
//     setShowQuiz(true);
//     setCorrectAnswers(0);
//     setWrongAnswers(0);
//   };

//   return (
//     <div>
//       {showQuiz ? (
//         <QuizDetail setShowQuiz={setShowQuiz} setCorrectAnswers={setCorrectAnswers} setWrongAnswers={setWrongAnswers} />
//       ) : (
//         <QuizResult correctAnswers={correctAnswers} wrongAnswers={wrongAnswers} handleRestart={handleRestart} />
//       )}
//     </div>
//   );
// }


import React, { useState } from "react";
import QuizQuestions from "../Components/QuizQuestion";
import QuizDetail from "../Components/QuizDetail";
import QuizResult from "../Components/QuizResult";

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
          questions={QuizQuestions} // Passing the question prop here
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          setShowQuiz={setShowQuiz}
        />
      ) : (
        // Show the QuizResult component if showQuiz is false
        <QuizResult
          questions={QuizQuestions} // Corrected the prop name to "questions"
          userAnswers={userAnswers}
          handleRestart={handleRestart}
        />
      )}
    </div>
  );
}

