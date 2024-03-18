import './App.css';
import { useEffect , useState } from 'react';
import PostAdd from './Components/PostAdd/post.js'
import Navbar from './Components/Navbar/navbar.js'


function App() {

  return (
    <div className="container">

        <Navbar/> 
        <PostAdd/>
    </div>
  );
}

export default App;
