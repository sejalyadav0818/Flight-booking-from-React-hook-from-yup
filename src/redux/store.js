import { createStore, applyMiddleware } from "redux";
import reducer from "../redux/reducer";
import {  saveState } from "../redux/localstorage";


export const store = createStore(
  reducer,
  //   applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState(store.getState());
});

