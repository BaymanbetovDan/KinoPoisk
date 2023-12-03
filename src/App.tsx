import React from 'react';
import Header from './componets/Header/Header';

import { Route, Routes } from 'react-router-dom'
import Home from './componets/Pages/Home/Home';
import Detail from './componets/Pages/Detail/Detail';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>

    </div>
  );
};

export default App;