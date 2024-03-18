import "./App.css";
import Quiz from "./Component/Quiz/quiz";
import store from "./Store/store";
import { Provider } from 'react-redux'

function App() {

  return (

    <Provider store={store}>
      <Quiz />
    </Provider>

  )
}

export default App;
