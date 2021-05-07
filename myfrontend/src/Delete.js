import React, {useState, useEffect} from "react";
import axios from 'axios';

const MyDELETE = (props) => {

    const [userId,setuserId] = useState("");
    const handleSubmit = (event) => {
        console.log(`Dane do wysłania ${userId}`);


       axios.delete(`/api/users/${userId}`) 
       .then(function (response){
           console.log(response);
       })
       .catch(function (error) {
        console.log(error);
       });
   

        event.preventDefault();
    };


    return(<>
        <input type ='text' value = {userId} onChange={event => setuserId(event.target.value)}/> Id usera<br/> 
        <input type ='submit' value='OK' onClick={handleSubmit} />
    </>);

};

export default MyDELETE;
