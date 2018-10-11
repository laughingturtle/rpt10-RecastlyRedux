import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
//import changeVideo from '../actions/currentVideo.js';

//var VideoPlayerContainer = () => {};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

const mapStateToProps = (state) => {
  return {
    video: state.currentVideo,
  };
};

const mapDispatchToProps = (dispatch) => ({});

const VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);


export default VideoPlayerContainer;
