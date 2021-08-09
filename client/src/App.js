// import './App.css';
// import Form from './component/form'; 
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [post, setPost] = useState('');
 
  useEffect(() => {
    axios.get("http://localhost/8999").then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost(){
    axios.post('http://localhost/8999' , {
      firstname:"hello world",
        lastName:"this is a new post"
    })
}

  if (!post) return null;
  return (
    <div className="App">
      {/* <Form/> */}
      <h1>{post.firstname}</h1>
      <p>{post.lastName}</p> 

      <button onClick ={createPost}>create post</button>
    </div>
  );
}

export default App;
