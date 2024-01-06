import './App.css';
import { useEffect , useState } from 'react';
import PostAdd from './Components/PostAdd/post.js'
import Navbar from './Components/Navbar/navbar.js'


function App() {
  const [list, setlist] = useState([])
  useEffect(function () {
      getDataFromApi()
  }, [])
  function getDataFromApi() {
      fetch('https://dummyjson.com/products')
          .then(res => res.json())
          .then(res => setlist(res.products))
              console.log(list);
          
  }
  return (
    <div className="container">

        <Navbar/> 
        <PostAdd/>
    </div>
  );
}

export default App;
