import './App.css';
import { useEffect , useState } from 'react';
import  Dashboard  from './Components/Dashboard/dashboard';
import Weather from './Components/Weather/weather';

function App() {
  const [atShow,setatShow] = useState(false)



  return (
    <div className='app'>
      {/* {!atShow?<Dashboard data={atShow}/>: <Weather/>} */}
      <Weather/>
    </div>
  );
}

export default App;
