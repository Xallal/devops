import React, {useState, useEffect} from "react";
import axios from 'axios';

const MyPUT = (props) => {

    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [userId,setuserId] = useState("");
    const [userCash,setuserCash] = useState("");
    const handleSubmit = (event) => {
        console.log(`Dane do wysłania ${name} ${email} ${userCash}`);


       axios.put(`/api/users/${userId}`, {name: name,email: email,cash: userCash}) 
       .then(function (response){
           console.log(response);
       })
       .catch(function (error) {
        console.log(error);
       });
   

        event.preventDefault();
    };


    return(<>

        <input type ='text' value = {name} onChange={event => setname(event.target.value)}/> Name<br/>
        <input type ='text' value = {email} onChange={event => setemail(event.target.value)}/> Email<br/>
        <input type ='text' value = {userCash} onChange={event => setuserCash(event.target.value)}/> Cash<br/>
        <input type ='text' value = {userId} onChange={event => setuserId(event.target.value)}/> Id<br/>
        <input type ='submit' value='OK' onClick={handleSubmit} />
    </>);

};

export default MyPUT;
