import React from 'react';
import './App.css';
import Greeting from './Greeting';

const App = () => {
  return (
    <>
      <h1>My App</h1>
      <Greeting name="John" />
      <Greeting name="Alice" />
      <Greeting name="123" />
    </>
  );
};
export default App;