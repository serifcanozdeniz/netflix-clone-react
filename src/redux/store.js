import { combineReducers } from "redux";
import { createStore } from "redux";
import movieReducer from './reducers/movieReducer';
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    movieReducer,
})


export default createStore(rootReducer, applyMiddleware(thunk));