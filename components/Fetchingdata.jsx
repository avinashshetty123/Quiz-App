import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Quiz from "./Quiz";
import Shimmer from "./Shimmer";

export default function FetchQuiz() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answered, setAnswered] = useState({});

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=50&category=18&difficulty=medium&type=multiple`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setQuestions(data.results);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  if (questions.length === 0) {
    return <Shimmer />;
  }

  const options = questions.map((ques) => [
    ques.correct_answer,
    ...ques.incorrect_answers,
  ]);
  options[currentIndex].sort(() => Math.random() - 0.5);

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleAnswered = () => {
    setAnswered((prev) => ({
      ...prev,
      [currentIndex]: true,
    }));
  };

  const correctAnswer = questions[currentIndex].correct_answer;

  return (
    <div>
      <Quiz
        ques={questions[currentIndex]?.question}
        next={nextQuestion}
        prev={prevQuestion}
        options={options[currentIndex]}
        correctAnswer={correctAnswer}
        handleAnswered={handleAnswered}
        isAnswered={answered[currentIndex] || false}
      />
      {currentIndex === questions.length - 1 && (
        <Link to="/Result">
          <div className="flex items-center justify-center">
            <button className="text-xl border-4 bg-yellow-300 hover:shadow-lg hover:bg-yellow-600 rounded-xl">
              Go to Results
            </button>
          </div>
        </Link>
      )}
    </div>
  );
}
