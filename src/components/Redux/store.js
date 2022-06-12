import { combineReducers,legacy_createStore as createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { studentReducer } from "./reducer";
const root=combineReducers({
studentReducer
})
const store=createStore(root,applyMiddleware(thunk))
export default store;