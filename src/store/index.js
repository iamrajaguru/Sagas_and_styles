// import { routerMiddleware } from "connected-react-router";
import { createStore, combineReducers, applyMiddleware } from "redux";
import HomeReducer from "../reducers/Home";
import history from "./history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import reduxSaga from "redux-saga";
import { GET_USERS } from "../actions/Home";
import { rootSaga } from "../sagas";
import { watchGetUsers } from "../actions/Home";

export const getStore = () => {
  const sagaMiddleWare = reduxSaga();
  const store = createStore(
    combineReducers({ HomeReducer, router: connectRouter(history) }),
    applyMiddleware(routerMiddleware(history), sagaMiddleWare)
  );
  sagaMiddleWare.run(rootSaga);

  return store;
};
// const sagaMiddleWare = reduxSaga();
// export default createStore(
//   combineReducers({ HomeReducer, router: connectRouter(history) }),
//   applyMiddleware(sagaMiddleWare)
// );
// sagaMiddleWare.run(rootSaga);
