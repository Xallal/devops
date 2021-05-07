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
    Poniżej wynik GET do bazy danych:<br /><br />

    <Post noPosts={initialValue} changeParentHandler={setInitialValue}/><br /><br />
    Formularz do POST<br />
    <Myform/><br /><br />
    
    Formularz do UPDATE<br />
    <MyPUT/><br /><br />
    Formularz do DELETE<br />
    <MyDELETE/><br /><br />
    </div>
   
  );
}

export default App;
