import React from "react";

export default function QuizResult({ questions, userAnswers, handleRestart }) {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-6 mr-5">Correct Answers</h1>
      <div className="border border-blue-600 w-[300px] lg:w-[800px] p-3 lg:h-[500px] h-[480px] ml-11 lg:ml-[330px] lg:mt-8 mt-10 text-center rounded shadow-lg">
        <h3 className="font-bold lg:text-3xl text-xl mt-24 text-green-600">
          Good Job!
        </h3>

        <p className="font-bold mt-3 ">Correct Answers of all the questions</p>
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
