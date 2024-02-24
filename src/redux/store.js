import { combineReducers } from "redux";
import { createStore } from "redux";
import movieReducer from './reducers/movieReducer';
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import genreReducer from "./reducers/genreReducer";

const rootReducer = combineReducers({
    movieReducer, genreReducer,
})


export default createStore(rootReducer, applyMiddleware(thunk));