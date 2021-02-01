import Router from "./Router";
import "./App.css";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { getStore } from "./store/index";
import history from "./store/history";
function App(props) {
  return (
      <Provider store={props.store}>
        <ConnectedRouter history={props.history}>
          <Router  />
        </ConnectedRouter>
      </Provider>
  );
}

export default App;
