import { combineReducers,legacy_createStore as createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { studentReducer } from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { listStudent } from "./action";



const root=combineReducers({
studentReducer
})
const store=createStore(root,composeWithDevTools(applyMiddleware(thunk)));
store.dispatch(listStudent());

export default store;