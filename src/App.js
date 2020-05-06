import React from 'react';
import './App.css';

function App() {
  const name = 'Shaaya'
  const showHello = true
  const showMath = true

  let math
  if (showMath){
    math = <h4>5 + 1 = {5+1} </h4>
  } else {
     math = null
  }
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <h3>Hello {name.toUpperCase()} </h3>
      {/* if showHello is True, greet, else do nothing */}
      {showHello ? <h4>Welcome back {name.toUpperCase()} </h4> : null}
      <h4>1 + 1 = {1+1} </h4>
      {math}
    </div>
  );

}

export default App;
