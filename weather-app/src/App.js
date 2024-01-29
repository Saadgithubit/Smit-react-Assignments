import './App.css';
import { useEffect , useState } from 'react';
import  Dashboard  from './Components/Dashboard/dashboard';
import Weather from './Components/Weather/weather';

function App() {
  const [weatherShow,setweatherShow] = useState(false)

const toggle = (value) => {
setweatherShow(value)
}

  return (
    <div className='app'>
      {!weatherShow?<Dashboard toggle={toggle}/>: <Weather/>}
    </div>
  );
}

export default App;
