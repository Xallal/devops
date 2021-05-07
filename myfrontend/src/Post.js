import React, {useState, useEffect} from "react";
import axios from 'axios';


const Post = (props) => {

    const [posts,setPosts] = useState([]);
    const [number, setNumber] = useState(-1);

    useEffect(()=> {
       axios.get('/api/users') 
       .then(response => setPosts(response.data))
       .catch(error => console.log(error))
    },[]);

    const handlePostClick = (event) => {
        console.log(event.target)
    }

    const handleNumberChange = (event) => {
        setNumber(event.target.value);
        props.changeParentHandler(event.target.value);
    };
return (
    <>
    <div>
        {posts
        //.filter(post => post.title.startsWith('a'))
        
        .map(post => (<div key={post.id}onClick={handlePostClick}>{post.name}{post.email}{post.cash}{post.id}  </div>))}
    </div>

    </>
);
}

export default Post;
