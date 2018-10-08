import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

var rootReducer = combineReducers({
  currentVideo: currentVideo,
  videoList: videoList
});


//TODO: define the root reducer for this app
// var rootReducer = combineReducers({
//   currentVideo: currentVideoReducer,
//   videoList: videoListReducer
// });

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
