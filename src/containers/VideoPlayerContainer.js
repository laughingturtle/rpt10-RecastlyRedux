import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

//var VideoPlayerContainer = () => {};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

const mapStateToProps = (state) => {
  return {
    video: state.currentVideo,
  };
};


// const mapDispatchToProps = () => {
//   handleVideoListEntryTitleClick: changeVideo;
// };

const VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);

export default VideoPlayerContainer;
