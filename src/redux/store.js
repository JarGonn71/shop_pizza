import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import filterReducer from "./filter";
import pizzasReducer from "./pizzas";
import cartReducer from "./cart";
import effectReducer from "./showEffect";



let rootReducer = combineReducers({
    filterReducer,
    pizzasReducer,
    cartReducer,
    effectReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))

);

window.store = store

export default store