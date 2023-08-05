import React, { useState } from "react";
import QuizQuestion from "../Components/QuizQuestion";
import QuizResult from "../Components/QuizResult";

export default function QuizDetail({
  questions,
  userAnswers,
  setUserAnswers,
  setShowQuiz,
}) {
  const [selectedOption, setSelectedOption] = useState("all");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleSelected = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNext = () => {
    if (currentQuestionIndex < QuizQuestion.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption("");
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setSelectedOption("");
    }
  };

  const handleSubmit = () => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questions[currentQuestionIndex].id]: selectedOption,
    }));

    if (currentQuestionIndex === questions.length - 1) {
      setShowQuiz(false); // Switch to the result view when submitting the quiz
    } else {
      handleNext();
    }
  };

  const currentQuestion = QuizQuestion[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === QuizQuestion.length - 1;
  return (
    <div>
      <h1 className="text-center text-2xl font-bold lg:mt-3 mt-5">
        JavaScript Quiz
      </h1>

      {showResult ? (
        <QuizResult />
      ) : (
        <div className="border border-blue-600 w-[300px] lg:w-[800px] lg:h-[450px] h-[480px] ml-11 lg:ml-[330px] mt-24 p-8 rounded shadow-lg">
          <h3 className="font-bold">{currentQuestion.question}</h3>
          <p className="text-xl mt-2">{currentQuestion.text}</p>

          <div className="flex flex-col lg:mt-4 mt-3  mr-12 ">
            {currentQuestion.options.map((option) => (
              <label
                key={option.id}
                htmlFor={option.id}
                className="flex items-center mt-2"
              >
                <input
                  type="radio"
                  // checked={selectedOption === option.id}
                  name="sort"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={handleSelected}
                  className="mr-1"
                />
                {option.text}
              </label>
            ))}
          </div>

          <div className="lg:mt-16 mt-8 lg:ml-[200px] ml-8 absolute lg:bottom-20 bottom-[25%] left-[20%] lg:left-[25%] right-0">
            {/* Use "absolute" positioning to fix the buttons at the bottom */}
            <button
              className="bg-blue-300 hover:bg-gray-300 font-bold p-3 lg:w-36 w-16 rounded"
              onClick={handleBack}
              disabled={currentQuestionIndex === 0}
            >
              Back
            </button>
            {isLastQuestion ? (
              <button
                className="bg-green-300 hover:bg-gray-300 font-bold p-3 lg:w-36 w-24 ml-3 rounded"
                onClick={handleSubmit}
              >
                Submit
              </button>
            ) : (
              <button
                className="bg-blue-300 font-bold hover:bg-gray-300 p-3 lg:w-36 w-16 ml-3 rounded"
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
