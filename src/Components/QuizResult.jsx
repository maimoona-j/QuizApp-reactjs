// import React from "react";

// export default function QuizResult({ questions, userAnswers, handleRestart }) {
//   const totalQuestions = questions.length;
//   const correctAnswers = questions.reduce((count, question) => {
//     const userAnswer = userAnswers[question.id];
//     const isCorrect = userAnswer === question.correctAnswer;
//     return isCorrect ? count + 1 : count;
//   }, 0);

//   const score = `You Scored ${correctAnswers} out of ${totalQuestions}`;

//   return (
//     <div>
//       <h1 className="text-center text-2xl font-bold mt-6">Your Scores</h1>
//       <div className="border border-blue-600 w-[300px] lg:w-[800px] p-3 lg:h-[500px] h-[480px] ml-11 lg:ml-[330px] lg:mt-8 mt-10 text-center rounded shadow-lg">
//         <h3 className="font-bold lg:text-3xl text-xl mt-24">{score}</h3>

//         <p className="font-bold mt-3 text-green-600">
//           Correct Answers of all the questions are:
//         </p>
//         <ul>
//           {questions.map((question) => (
//             <li key={question.id}>
//               {
//                 question.options.find(
//                   (option) => option.id === question.correctAnswer
//                 )?.text
//               }
//             </li>
//           ))}
//         </ul>
//         <button
//           className="bg-blue-400 font-bold text-white hover:bg-gray-300 hover:text-black p-3 w-36 rounded lg:mt-5 mt-3"
//           onClick={handleRestart}
//         >
//           Restart Quiz
//         </button>
//       </div>
//     </div>
//   );
// }

// import React from "react";

// export default function QuizResult({ questions, userAnswers, handleRestart }) {
//   const totalQuestions = questions.length;
//   const correctAnswers = questions.reduce((count, question) => {
//     const userAnswer = userAnswers[question.id];
//     const isCorrect = userAnswer === question.correctAnswer;
//     return isCorrect ? count + 1 : count;
//   }, 0);

//   const score = `You Scored ${correctAnswers} out of ${totalQuestions}`;

//   return (
//     <div>
//       <h1 className="text-center text-2xl font-bold mt-6">Your Scores</h1>
//       <div className="border border-blue-600 w-[300px] lg:w-[800px] p-3 lg:h-[500px] h-[480px] ml-11 lg:ml-[330px] lg:mt-8 mt-10 text-center rounded shadow-lg">
//         <h3 className="font-bold lg:text-3xl text-xl mt-24">{score}</h3>

//         <p className="font-bold mt-3 text-green-600">
//           Correct Answers of all the questions are:
//         </p>
//         <ul>
//           {questions.map((question) => (
//             <li key={question.id}>
//               {
//                 question.options.find(
//                   (option) => option.id === question.correctAnswer
//                 )?.text
//               }
//             </li>
//           ))}
//         </ul>
//         <button
//           className="bg-blue-400 font-bold text-white hover:bg-gray-300 hover:text-black p-3 w-36 rounded lg:mt-5 mt-3"
//           onClick={handleRestart}
//         >
//           Restart Quiz
//         </button>
//       </div>
//     </div>
//   );
// }

// import React from "react";

// export default function QuizResult({ questions, userAnswers, handleRestart }) {
//   const totalQuestions = questions.length;
//   const correctAnswers = questions.reduce((count, question) => {
//     const userAnswer = userAnswers[question.id];
//     const isCorrect = userAnswer === question.correctAnswer;
//     return isCorrect ? count + 1 : count;
//   }, 0);

//   const wrongAnswers = totalQuestions - correctAnswers;
//   const score = `You Scored ${correctAnswers} out of ${totalQuestions}`;

//   return (
//     <div>
//       <h1 className="text-center text-2xl font-bold mt-6">Your Scores</h1>
//       <div className="border border-blue-600 w-[300px] lg:w-[800px] p-3 lg:h-[500px] h-[480px] ml-11 lg:ml-[330px] lg:mt-8 mt-10 text-center rounded shadow-lg">
//         <h3 className="font-bold lg:text-3xl text-xl mt-24">{score}</h3>

//         <p className="font-bold mt-3 text-green-600">
//           Correct Answers of all the questions are:
//         </p>
//         <ul>
//           {questions.map((question) => (
//             <li key={question.id}>
//               {
//                 question.options.find(
//                   (option) => option.id === question.correctAnswer
//                 )?.text
//               }
//             </li>
//           ))}
//         </ul>
//         <button
//           className="bg-blue-400 font-bold text-white hover:bg-gray-300 hover:text-black p-3 w-36 rounded lg:mt-5 mt-3"
//           onClick={handleRestart}
//         >
//           Restart Quiz
//         </button>
//       </div>
//     </div>
//   );
// }



// import React from "react";

// export default function QuizResult({ questions, userAnswers, handleRestart }) {
//   const totalQuestions = questions.length;
//   const correctAnswers = questions.reduce((count, question) => {
//     const userAnswer = userAnswers[question.id];
//     const isCorrect = userAnswer === question.correctAnswer;
//     return isCorrect ? count + 1 : count;
//   }, 0);

//   const wrongAnswers = totalQuestions - correctAnswers;
//   const score = `${correctAnswers} out of ${totalQuestions}`;

//   return (
//     <div>
//       <h1 className="text-center text-2xl font-bold mt-6">Your Scores</h1>
//       <div className="border border-blue-600 w-[300px] lg:w-[800px] lg:h-[500px] h-[480px] ml-11 lg:ml-[330px] lg:mt-8 mt-12 text-center rounded shadow-lg">
//         <h3 className="font-bold text-3xl mt-4">{score}</h3>

//         <p className="font-bold mt-3 text-green-600">Correct Answers:</p>
//         <ul>
//           {questions.map((question) => (
//             <li key={question.id}>
//               {
//                 question.options.find(
//                   (option) => option.id === question.correctAnswer
//                 )?.text
//               }
//             </li>
//           ))}
//         </ul>

//         <p className="font-bold mt-2 text-red-600">Wrong Answers:</p>
//         <ul>
//           {questions.map((question) => (
//             <li key={question.id}>
//               {userAnswers[question.id] !== question.correctAnswer &&
//                 userAnswers[question.id] &&
//                 question.options.find(
//                   (option) => option.id === userAnswers[question.id]
//                 )?.text}
//             </li>
//           ))}
//         </ul>
//         <button
//           className="bg-blue-400 font-bold text-white hover:bg-gray-300 hover:text-black p-3 w-36 rounded lg:mt-3 mt-3"
//           onClick={handleRestart}
//         >
//           Restart
//         </button>
//       </div>
//     </div>
//   );
// }





// import React from "react";

// export default function QuizResult({ questions, userAnswers, handleRestart }) {
//   const totalQuestions = questions.length;
//   const correctAnswers = questions.reduce((count, question) => {
//     const userAnswer = userAnswers[question.id];
//     const isCorrect = userAnswer === question.correctAnswer;
//     return isCorrect ? count + 1 : count;
//   }, 0);

//   const score = `You Scored ${correctAnswers} out of ${totalQuestions}`;

//   return (
//     <div>
//       <h1 className="text-center text-2xl font-bold mt-6">Your Scores</h1>
//       <div className="border border-blue-600 w-[300px] lg:w-[800px] p-3 lg:h-[500px] h-[480px] ml-11 lg:ml-[330px] lg:mt-8 mt-10 text-center rounded shadow-lg">
//         <h3 className="font-bold lg:text-3xl text-xl mt-24">{score}</h3>

//         <p className="font-bold mt-3 text-green-600">
//           Correct Answers of all the questions are:
//         </p>
//         <ul>
//           {questions.map((question) => (
//             <li key={question.id}>
//               {
//                 question.options.find(
//                   (option) => option.id === question.correctAnswer
//                 )?.text
//               }
//             </li>
//           ))}
//         </ul>
//         <button
//           className="bg-blue-400 font-bold text-white hover:bg-gray-300 hover:text-black p-3 w-36 rounded lg:mt-5 mt-3"
//           onClick={handleRestart}
//         >
//           Restart Quiz
//         </button>
//       </div>
//     </div>
//   );
// }


 

// import React from "react";

// export default function QuizResult({ questions, userAnswers, handleRestart }) {
//   const totalQuestions = questions.length;
//   const correctAnswers = questions.reduce((count, question) => {
//     const userAnswer = userAnswers[questions.id];
//     const isCorrect = userAnswer === questions.correctAnswer;
//     return isCorrect ? count + 1 : count;
//   }, 0);

//   const score = `You Scored ${correctAnswers} out of ${totalQuestions}`;

//   return (
//     <div>
//       <h1 className="text-center text-2xl font-bold mt-6">Your Scores</h1>
//       <div className="border border-blue-600 w-[300px] lg:w-[800px] p-3 lg:h-[500px] h-[480px] ml-11 lg:ml-[330px] lg:mt-8 mt-10 text-center rounded shadow-lg">
//         <h3 className="font-bold lg:text-3xl text-xl mt-24">{score}</h3>

//         <p className="font-bold mt-3 text-green-600">
//           Correct Answers of all the questions are:
//         </p>
//         <ul>
//           {questions.map((question) => (
//             <li key={questions.id}>
//               {
//                 questions.options.find(
//                   (option) => option.id === questions.correctAnswer
//                 )?.text
//               }
//             </li>
//           ))}
//         </ul>
//         <button
//           className="bg-blue-400 font-bold text-white hover:bg-gray-300 hover:text-black p-3 w-36 rounded lg:mt-5 mt-3"
//           onClick={handleRestart}
//         >
//           Restart Quiz
//         </button>
//       </div>
//     </div>
//   );
// }


// import React from "react";

// export default function QuizResult({ questions, userAnswers, handleRestart }) {
//   const totalQuestions = questions.length;
//   const correctAnswers = questions.reduce((count, question) => {
//     const userAnswer = userAnswers[question.id];
//     const isCorrect = userAnswer === question.correctAnswer;
//     return isCorrect ? count + 1 : count;
//   }, 0);

//   const score = `You Scored ${correctAnswers} out of ${totalQuestions}`;

//   return (
//     <div>
//       <h1 className="text-center text-2xl font-bold mt-6">Your Scores</h1>
//       <div className="border border-blue-600 w-[300px] lg:w-[800px] p-3 lg:h-[500px] h-[480px] ml-11 lg:ml-[330px] lg:mt-8 mt-10 text-center rounded shadow-lg">
//         <h3 className="font-bold lg:text-3xl text-xl mt-24">{score}</h3>

//         <p className="font-bold mt-3 text-green-600">
//           Correct Answers of all the questions are:
//         </p>
//         <ul>
//           {questions.map((question) => (
//             <li key={question.id}>
//               {
//                 question.options.find(
//                   (option) => option.id === question.correctAnswer
//                 )?.text
//               }
//             </li>
//           ))}
//         </ul>
//         <button
//           className="bg-blue-400 font-bold text-white hover:bg-gray-300 hover:text-black p-3 w-36 rounded lg:mt-5 mt-3"
//           onClick={handleRestart}
//         >
//           Restart Quiz
//         </button>
//       </div>
//     </div>
//   );
// }

 

// import React from 'react';

// export default function QuizResult({ questions, userAnswers, handleRestart }) {
//   const totalQuestions = questions.length;
//   const correctAnswers = questions.reduce((count, question) => {
//     const userAnswer = userAnswers[question.id];
//     const isCorrect = userAnswer === question.correctAnswer;
//     return isCorrect ? count + 1 : count;
//   }, 0);

//   const wrongAnswers = totalQuestions - correctAnswers;
//   const score = `${correctAnswers} out of ${totalQuestions}`;

//   return (
//     <div>
//       <h1 className="text-center text-2xl font-bold mt-3">Your Scores</h1>
//       <div className="border border-blue-600 w-[800px] h-[450px] ml-[330px] mt-16 p-4 text-center">
//         <h3 className="font-bold text-3xl">{score}</h3>
//         <p className="font-bold">Correct Answers:</p>
//         <ul>
//           {questions.map((question) => (
//             <li key={question.id}>
//               {question.options.find((option) => option.id === question.correctAnswer)?.text}
//             </li>
//           ))}
//         </ul>
//         <p className="font-bold">Wrong Answers:</p>
//         <ul>
//           {questions.map((question) => (
//             <li key={question.id}>
//               {userAnswers[question.id] !== question.correctAnswer && userAnswers[question.id] && question.options.find((option) => option.id === userAnswers[question.id])?.text}
//             </li>
//           ))}
//         </ul>
//         <button className="bg-blue-300 p-3 w-36 rounded" onClick={handleRestart}>
//           Restart
//         </button>
//       </div>
//     </div>
//   );
// }



// import React from 'react';

// export default function QuizResult({ questions, userAnswers, handleRestart }) {
//   const totalQuestions = questions.length;
//   const correctAnswers = questions.reduce((count, question) => {
//     const userAnswer = userAnswers[question.id];
//     const isCorrect = userAnswer === question.correctAnswer;
//     return isCorrect ? count + 1 : count;
//   }, 0);

//   const wrongAnswers = totalQuestions - correctAnswers;
//   const score = `${correctAnswers} out of ${totalQuestions}`;

//   return (
//     <div>
//       <h1 className="text-center text-2xl font-bold mt-3">Your Scores</h1>
//       <div className="border border-blue-600 w-[800px] h-[450px] ml-[330px] mt-16 p-4 text-center">
//         <h3 className="font-bold text-3xl">{score}</h3>
//         <p className="font-bold">Correct Answers:</p>
//         <ul>
//           {questions.map((question) => (
//             <li key={question.id}>
//               {userAnswers[question.id] === question.correctAnswer && question.options.find((option) => option.id === question.correctAnswer)?.text}
//             </li>
//           ))}
//         </ul>
//         <p className="font-bold">Wrong Answers:</p>
//         <ul>
//           {questions.map((question) => (
//             <li key={question.id}>
//               {userAnswers[question.id] !== question.correctAnswer && userAnswers[question.id] && question.options.find((option) => option.id === userAnswers[question.id])?.text}
//             </li>
//           ))}
//         </ul>
//         <button className="bg-blue-300 p-3 w-36 rounded" onClick={handleRestart}>
//           Restart
//         </button>
//       </div>
//     </div>
//   );
// }




// working code

// import React from "react";

// export default function QuizResult({ questions, userAnswers, handleRestart }) {
//   const totalQuestions = questions.length;
//   const correctAnswers = questions.reduce((count, question) => {
//     const userAnswer = userAnswers[question.id];
//     const isCorrect = userAnswer === question.correctAnswer;
//     return isCorrect ? count + 1 : count;
//   }, 0);

//   const score = `You Scored ${correctAnswers} out of ${totalQuestions}`;

//   return (
//     <div>
//       <h1 className="text-center text-2xl font-bold mt-6">Your Scores</h1>
//       <div className="border border-blue-600 w-[300px] lg:w-[800px] p-3 lg:h-[500px] h-[480px] ml-11 lg:ml-[330px] lg:mt-8 mt-10 text-center rounded shadow-lg">
//         <h3 className="font-bold lg:text-3xl text-xl mt-24">{score}</h3>

//         <p className="font-bold mt-3 text-green-600">
//           Correct Answers of all the questions are:
//         </p>
//         <ul>
//           {questions.map((question) => (
//             <li key={question.id}>
//               {
//                 question.options.find(
//                   (option) => option.id === question.correctAnswer
//                 )?.text
//               }
//             </li>
//           ))}
//         </ul>
//         <button
//           className="bg-blue-400 font-bold text-white hover:bg-gray-300 hover:text-black p-3 w-36 rounded lg:mt-5 mt-3"
//           onClick={handleRestart}
//         >
//           Restart Quiz
//         </button>
//       </div>
//     </div>
//   );
// }




// import React from "react";

// export default function QuizResult({ questions, userAnswers, handleRestart }) {
//   const totalQuestions = questions.length;
//   const correctAnswers = questions.reduce((count, question) => {
//     const userAnswer = userAnswers[question.id];
//     const isCorrect = userAnswer === question.correctAnswer;
//     return isCorrect ? count + 1 : count;
//   }, 0);

//   const score = `You Scored ${correctAnswers} out of ${totalQuestions}`;

//   return (
//     <div>
//       <h1 className="text-center text-2xl font-bold mt-6">Your Scores</h1>
//       <div className="border border-blue-600 w-[300px] lg:w-[800px] p-3 lg:h-[500px] h-[480px] ml-11 lg:ml-[330px] lg:mt-8 mt-10 text-center rounded shadow-lg">
//         <h3 className="font-bold lg:text-3xl text-xl mt-24">{score}</h3>

//         <p className="font-bold mt-3 text-green-600">
//           Correct Answers of all the questions are:
//         </p>
//         <ul>
//           {questions.map((question) => (
//             <li key={question.id}>
//               {
//                 question.options.find(
//                   (option) => option.id === question.correctAnswer
//                 )?.text
//               }
//             </li>
//           ))}
//         </ul>
//         <button
//           className="bg-blue-400 font-bold text-white hover:bg-gray-300 hover:text-black p-3 w-36 rounded lg:mt-5 mt-3"
//           onClick={handleRestart}
//         >
//           Restart Quiz
//         </button>
//       </div>
//     </div>
//   );
// }



import React from "react";

export default function QuizResult({ questions, userAnswers, handleRestart }) {
  // console.log("userAnswers in QuizResult:", userAnswers);
  // const totalQuestions = questions.length;
  // const correctAnswers = questions.reduce((count, question) => {
  //   const userAnswer = userAnswers[question.id];
  //   const isCorrect = userAnswer === question.correctAnswer;
  //   return isCorrect ? count + 1 : count;
  // }, 0);

  // const score = `You Scored ${correctAnswers} out of ${totalQuestions}`;

  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-6">Correct Answers</h1>
      <div className="border border-blue-600 w-[300px] lg:w-[800px] p-3 lg:h-[500px] h-[480px] ml-11 lg:ml-[330px] lg:mt-8 mt-10 text-center rounded shadow-lg">
        <h3 className="font-bold lg:text-3xl text-xl mt-24 text-green-600">Good Job!</h3>

        <p className="font-bold mt-3 ">
        Correct Answers of all the questions
        </p>
        <ul>
          {questions.map((question) => (
            <li key={question.id}>
              {
                question.options.find(
                  (option) => option.id === question.correctAnswer
                )?.text
              }
            </li>
          ))}
        </ul>
        <button
          className="bg-blue-400 font-bold text-white hover:bg-gray-300 hover:text-black p-3 w-36 rounded lg:mt-5 mt-3"
          onClick={handleRestart}
        >
          Restart Quiz
        </button>
      </div>
    </div>
  );
}

 