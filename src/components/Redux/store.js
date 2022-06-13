import { combineReducers,legacy_createStore as createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { studentReducer } from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const root=combineReducers({
studentReducer
})
const store=createStore(root,composeWithDevTools(applyMiddleware(thunk)));

export default store;