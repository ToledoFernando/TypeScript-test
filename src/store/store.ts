import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

export const Store = createStore(rootReducer, applyMiddleware(thunk));
