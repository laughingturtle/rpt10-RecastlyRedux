import Redux from 'redux';
//console.log('redux:', Redux);

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO':
    // if(!action.type) {
    //   return null
    // }
    return action.video || null;
  default:
    return state;
  }
};

export default currentVideoReducer;
