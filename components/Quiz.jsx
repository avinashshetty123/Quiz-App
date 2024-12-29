import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import leftarrow from "../assets/left-arrow.png";
import rightarrow from "../assets/right-arrow.png";
import {MyContext} from "./Contextapi";

export default function Quiz(props) {
const {Correct,Incorrect,Setcorrect,SetIncorrect}=useContext(MyContext)
  const correctanswer = props.correctanswer;
  const [isanswered, setisanswered] = useState(false);
  const [clickedoption, setclickedoption] = useState(null);
  const [optioncorrect, setoptioncorrect] = useState(false);
  useEffect(() => {
    setisanswered(false);
    setclickedoption(null);
    setoptioncorrect(false);
  }, [props.options]);


  console.log(Correct, Incorrect);

  const handleClick = (value, index) => {
    console.log("Clicked value:", value);
    if (isanswered) {
      return;
    }
    setisanswered(true);
    setclickedoption(index);
    setoptioncorrect(correctanswer === value);

    // Check if the selected option is correct
    if (correctanswer === value) {
      Setcorrect((prevCorrect) => {
        console.log("Correct count before update:", prevCorrect);
        return prevCorrect + 1;
      });
    } else {
      SetIncorrect((prevIncorrect) => {
        console.log("Incorrect count before update:", prevIncorrect);
        return prevIncorrect + 1;
      });
    }
  };


  const [Option1, Option2, Option3, Option4] = props.options;

  return (
    <>
      <div className="main_container border flex flex-col justify-center items-center top-7">
        <input
          type="text"
          name="Questions"
          id="Question"
          className="border-2 border-green-500 rounded-3xl mt-20 p-7 text-center sm:max-w-screen-md w-full text-wrap sm:text-xs text-sm font-bold"
          disabled
          autoFocus
          value={props.ques}
        />
        <span className="mt-4">Click the Correct MCQ</span>
      </div>

      <div className="mcq_container flex flex-col">
        <div className="button_container grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:gap-8 sm:p-8 mx-auto mt-10 max-w-4xl disabled">

          <button
            className={`border-2 border-green-500 h-11 rounded-3xl text-center min-w-72 sm:text-xs text-sm font-semibold cursor-pointer hover:border-red-300 ${
              isanswered
                ? clickedoption === 1
                  ? optioncorrect
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-gray-100 cursor-not-allowed"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => handleClick(Option1, 1)}
            disabled={isanswered}
          >
            {Option1}
          </button>

          <button
            className={`border-2 border-green-500 h-11 rounded-3xl text-center min-w-72 sm:text-xs text-sm font-semibold cursor-pointer hover:border-red-300 ${
              isanswered
                ? clickedoption === 2
                  ? optioncorrect
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-gray-100 cursor-not-allowed"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => handleClick(Option2, 2)}
            disabled={isanswered}
          >
            {Option2}
          </button>

          <button
            className={`border-2 border-green-500 h-11 rounded-3xl text-center min-w-72 sm:text-xs text-sm font-semibold cursor-pointer  hover:border-red-300 ${
              isanswered
                ? clickedoption === 3
                  ? optioncorrect
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-gray-100 cursor-not-allowed"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => handleClick(Option3, 3)}
            disabled={isanswered}
          >
            {Option3}
          </button>

          <button
            className={`border-2 border-green-500 h-11 rounded-3xl text-center min-w-72 sm:text-xs text-sm font-semibold cursor-pointer  hover:border-red-300 ${
              isanswered
                ? clickedoption === 4
                  ? optioncorrect
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-gray-100 cursor-not-allowed"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
            onClick={() => handleClick(Option4, 4)}
            disabled={isanswered}
          >
            {Option4}
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-32">
        <div className="back_btn">
          <Button image={leftarrow} children={"previous"} url={props.prev} />
        </div>
        <div className="Next_btn">
          <Button image={rightarrow} children={"next_arrow"} url={props.next} />
        </div>
      </div>
    </>
  );
}
