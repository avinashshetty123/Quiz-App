import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Quiz from "./Quiz";
import Shimmer from "./Shimmer";

export default function FetchQuiz() {
  const [questions, setQuestions] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=50&category=18&difficulty=medium&type=multiple`
    )
      .then((res) => res.json())
      .then((data) => setQuestions(data.results))
      .catch((err) => console.log(err));
  }, []);

  if (questions.length === 0) {
    return <Shimmer />;
  }

  let options = questions.map((ques) => [
    ques.correct_answer,
    ...ques.incorrect_answers,
  ]);
  options[currentIndex].sort(() => Math.random() - 0.5);
  console.log(options[currentIndex]);

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const PrevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const correctanswer = questions[currentIndex].correct_answer;
  console.log(correctanswer);

  return (
    <div>
      <Quiz
        ques={questions[currentIndex]?.question}
        next={nextQuestion}
        prev={PrevQuestion}
        options={options[currentIndex]}
        correctanswer={correctanswer}
      />
      {/* Add the Link to the Result page if all questions have been answered */}
      {currentIndex === questions.length - 1 && (
        <Link to="/Result">
          <div className="flex items-center justify-center">
            
          <button className="text-xl border-4 bg-yellow-300 hover:shadow-lg hover:bg-yellow-600 rounded-xl">Go to Results</button>
          </div>
        </Link>
      )}
    </div>
  );
}