import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// planning for redux state
// in the reducers we need the states videos and currentVideos

export default store;