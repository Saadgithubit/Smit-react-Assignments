import Router from "./Config/router";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Store/store";

function App() {
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <div className="App">
        <Router />
      </div>
      </PersistGate>
  </Provider >

  )
}

export default App;
