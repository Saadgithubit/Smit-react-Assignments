import './App.css';
import { useEffect, useState } from 'react';
import Router from './config/router';
import store from './Store/store';
import { Provider } from 'react-redux';
import Theme from './Components/Theme/theme';

function App() {
  const [colorTheme , setcolorTheme] = useState('')
  
  function updatedTheme(theme){
  setcolorTheme(theme)
  }

  return (
    <Provider store={store}>
      <div className='app' style={{background: colorTheme}}>
        <Theme updatedTheme={updatedTheme}/>
        <Router />
      </div>
    </Provider>

  );
}

export default App;
