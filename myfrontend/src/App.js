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

    <Post noPosts={initialValue} changeParentHandler={setInitialValue}/><br /><br />
    Formularz do POST (robiony na lekcji)<br />
    <Myform/><br /><br />
    Formularz do Update<br />
    <MyPUT/><br /><br />
    Formularz do DELETE<br />
    <MyDELETE/><br /><br />
    </div>
   
  );
}

export default App;
