import React from 'react';

import './App.css';
import ToDo from './components/todo';

function App() {
  return (
    <div className='App'>
      <h1> My to-do's </h1>
      <div className='todo-container'>
        <ToDo text="1st todo" />
        <ToDo text="2st todo" />
        <ToDo text="3st todo" />
      </div>
    </div>
  );
}

export default App;
