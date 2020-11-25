import React, {Component} from 'react';
import '../../ViewComponents/coursepage/course.css';
import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
    lesson: state.lessonReducer.lesson,
  };
}

class Video extends Component {
  
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    // https://developers.google.com/youtube/player_parameters
    const opts = {
      height: '390',
      width: '640',
      playerVars: 
        this.props.lesson.settings,
      
    };
    return (
      <>
        <div className={'content'}>
          {/* <ReactPlayer url="https://www.youtube.com/watch?v=wzR0G67-FBM&feature=emb_logo&ab_channel=במהכהלכה" />
          dd */}
          <YouTube videoId={this.props.lesson.lesson_url} opts={opts} onReady={this._onReady} />
        </div>
        {/* <div className={"video content"+this.props.view? 'margin-view':''}></div> */}
      </>
    );
  }
}
export default connect(
  mapStateToProps,
  null
)(Video)
// export default Video;
