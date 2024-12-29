import React, { useContext,useState,useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {MyContext} from './Contextapi';
import Confetti from 'react-confetti';
ChartJS.register(ArcElement, Tooltip, Legend);
function Result() {
  const { Correct, Incorrect} = useContext(MyContext);

  const totalQuestions = 50;
  const skipped = totalQuestions - Correct - Incorrect;


  const data = {
    labels: ['Correct Answers', 'Incorrect Answers', 'Skipped'],
    datasets: [
      {
        label: 'Quiz Results',
        data: [Correct, Incorrect, skipped],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
    },
  };
  const resultText = `Your result: ${Correct} Correct, ${Incorrect} Incorrect, ${skipped} Skipped`;

  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
 
    setShowConfetti(true);

    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
    
    {showConfetti && <Confetti />}
      <h1 className="text-xl text-center font-bold">Statistical Analysis</h1>
      <div className="mt-14">
        <Doughnut data={data} options={options} className="max-h-64" />
      </div>
      <div className="result flex justify-center items-center flex-col mt-32">
        <progress value={Correct} max={totalQuestions} className="sm:min-w-96 min-w-60 ml-6 mr-6" />
        <h3 className="text-2xl">{resultText}</h3>
      </div>
    </>
  );
}

export default Result;
