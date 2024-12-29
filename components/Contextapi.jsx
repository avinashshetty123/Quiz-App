import React, { createContext, useState } from 'react';

// Create the context object
const MyContext = createContext();

function Contextapi({ children }) {
  const [Correct, Setcorrect] = useState(0);
  const [Incorrect, SetIncorrect] = useState(0);

  return (
    <MyContext.Provider value={{ Correct, Incorrect, Setcorrect, SetIncorrect }}>
      {children}  {/* Render the children wrapped inside the context provider */}
    </MyContext.Provider>
  );
}

export { Contextapi, MyContext };  // Exporting both the provider component and the context object
