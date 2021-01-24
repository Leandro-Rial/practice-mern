import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './GlobalState';
import Header from './components/headers/Header';
import MainPages from './components/mainPages/Pages';

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <MainPages />
      </Router>
    </DataProvider>
  );
}

export default App;
