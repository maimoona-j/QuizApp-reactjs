 const QuizQuestion = [
    {
      question: "Question 1",
      text: "Which built-in method combines the text of two strings and returns a new string?",
      options:[
        {id:"option1", text:"append()"},
        {id:"option2", text:" concat()"},
        {id:"option3", text:"attach()"},
        {id:"option4", text:"None of the above."},
      ],
      correctAnswer:"option2",
    },
    {
        question: "Question 2",
        text: "Which built-in method returns the calling string value converted to lower case?",
        options:[
          {id:"option1", text:"toLowerCase()"},
          {id:"option2", text:"toLower()"},
          {id:"option3", text:"changeCase(case)"},
          {id:"option4", text:" None of the above"},
        ],
        correctAnswer:"option1",
      },
      {
        question: "Question 3",
        text: "Which of the following function of String object extracts a section of a string and returns a new string?",
        options:[
          {id:"option1", text:"replace()"},
          {id:"option2", text:"split()"},
          {id:"option3", text:"slice()"},
          {id:"option4", text:"None of the above."},
        ],
        correctAnswer:"option3",
      },
      {
        question: "Question 4",
        text: "Which of the following function of String object returns a string representing the specified object?",
        options:[
          {id:"option1", text:" toLocaleUpperCase() "},
          {id:"option2", text:"toUpperCase()"},
          {id:"option3", text:"toString()"},
          {id:"option4", text:"None of the above."},
        ],
        correctAnswer:"option3",
      },
      {
        question: "Question 5",
        text: "Which of the following function of Array object calls a function for each element in the array?",
        options:[
          {id:"option1", text:"concat()"},
          {id:"option2", text:" forEach()"},
          {id:"option3", text:"every()"},
          {id:"option4", text:"None of the above."},
        ],
        correctAnswer:"option2",
      },
      {
        question: "Last Question",
        text: "Which of the following is correct about features of JavaScript?",
        options:[
          {id:"option1", text:" JavaScript is is complementary to and integrated with HTML"},
          {id:"option2", text:"JavaScript is open and cross-platform"},
          {id:"option3", text:"Both of the above"},
          {id:"option4", text:"None of the above"},
        ],
        correctAnswer:"option3",
      },
               
  ];
  
  export default QuizQuestion;