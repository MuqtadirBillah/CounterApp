import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  if(count<0){
    setCount(0);
  }

  return (
    <div className="appDiv">
      <h1>Counter</h1>
      <div className="counterDiv">
        <h2 className="countNumber">{count}</h2>
        <div className="buttonDiv">
          <button className="buttonTag dec" onClick={()=>{setCount(count-1)}}><h1>-</h1></button>
          <button className="buttonTag inc" onClick={()=>{setCount(count+1)}}><h1>+</h1></button>
        </div>
      </div>
      <hr />
      <p>Made by MBMA</p>
    </div>
  );
}

export default App;
