import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO':
<<<<<<< HEAD
    if (!action.video) {
      return null;
    }
    return action.video;
=======
    // if(!action.type) {
    //   return null
    // }
    return action.video || null;
>>>>>>> 7a6f5b4cf7159993adb3120a000af53e3dd8d6df
  default:
    return state;
  }
};

export default currentVideoReducer;
