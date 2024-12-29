import React from 'react';
import Header from './Header';
import Startpage from './Startpage';
import Result from './Result';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FetchQuiz from './Fetchingdata'; // Assuming this fetches quiz data
import {Contextapi} from './Contextapi'; // Assuming you have context setup here

export default function App() {
  return (
    <Contextapi>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/Quiz-App' element={<Startpage />} />
          <Route path='/Quiz' element={<FetchQuiz />} />
          <Route path='/Result' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </Contextapi>
  );
}
