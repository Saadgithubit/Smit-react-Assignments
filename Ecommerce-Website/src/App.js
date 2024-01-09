import './App.css';
import Dashboard from './Views/Dashboard/dashboard';
import Router from './Config/router';
import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router/>
      <Dashboard/>
    </div>
  );
}

export default App;
