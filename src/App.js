import React from 'react';
import './App.css';
import './Assets/SCSS/main.scss';

import Timer from './Components/Timer';
import Task from './Components/Tasks';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
      <Task />
      <Footer />
    </div>
  );
}

export default App;