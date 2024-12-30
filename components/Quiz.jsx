import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import leftarrow from "../assets/left-arrow.png";
import rightarrow from "../assets/right-arrow.png";
import { MyContext } from "./Contextapi";

export default function Quiz(props) {
  const { Correct, Incorrect, Setcorrect, SetIncorrect } = useContext(MyContext);
  const correctAnswer = props.correctAnswer;

  const handleClick = (value, index) => {
    if (props.isAnswered) {
      alert("You have already answered this question. Please move forward.");
      return;
    }

    // Mark question as answered
    props.handleAnswered();

    if (correctAnswer === value) {
      Setcorrect((prev) => prev + 1);
    } else {
      SetIncorrect((prev) => prev + 1);
    }
  };

  const [Option1, Option2, Option3, Option4] = props.options;

  return (
    <>
      <div className="main_container border flex flex-col justify-center items-center top-7">
        <input
          type="text"
          className="border-2 border-green-500 rounded-3xl mt-20 p-7 text-center sm:max-w-screen-md w-full text-wrap sm:text-xs text-sm font-bold"
          disabled
          value={props.ques}
        />
        <span className="mt-4">Click the Correct MCQ</span>
      </div>
      <div className="mcq_container flex flex-col">
        <div className="button_container grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:gap-8 sm:p-8 mx-auto mt-10 max-w-4xl">
          {[Option1, Option2, Option3, Option4].map((option, idx) => (
            <button
              key={idx}
              className={`border-2 border-green-500 h-11 rounded-3xl text-center min-w-72 sm:text-xs text-sm font-semibold cursor-pointer ${
                props.isAnswered
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => handleClick(option, idx)}
              disabled={props.isAnswered}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-32">
        <Button image={leftarrow} children={"Previous"} url={props.prev} />
        <Button image={rightarrow} children={"Next"} url={props.next} />
      </div>
    </>
  );
}
