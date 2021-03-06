import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {
  meetingSetupReducer,
  meetingSentReducer,
} from "./reducers/meetingSetupReducer";
import thunk from "redux-thunk";

const initialState = {};

const reducer = combineReducers({
  meetingSetupReducer: meetingSetupReducer,
  meetingSentReducer: meetingSentReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
