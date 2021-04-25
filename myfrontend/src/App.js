import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Post from './Post.js'
import Myform from './Myform.js';
import MyPUT from './Update.js';
import MyDELETE from './Delete.js';
function App() {

  const [initialValue, setInitialValue ] =  useState(1234)

  const handleInitialValue = (event) => {
    setInitialValue(event.target.value);
  }

  return (
    <div>
      {initialValue}<br />
    <input onChange ={handleInitialValue}/>

    <Post noPosts={initialValue} changeParentHandler={setInitialValue}/><br />
    <Myform/><br />
    <MyPUT/><br />
    <MyDELETE/><br />
    </div>
   
  );
}

export default App;
