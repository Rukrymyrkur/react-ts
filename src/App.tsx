import React from 'react';
import './App.css';
import { BeverageList } from './components/BeverageList';
import { QuoteList } from './components/QuoteList';
import { Todos } from './components/Todos';

const App = () => {
  return (
    <>
      <Todos />
      <BeverageList />
      <QuoteList />
    </>
  );
}

export default App;
