import { createStore } from "redux";
import rootReducer from "./Reducers";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

// ! now import this store in main.jsx