import React, {Component} from 'react';
import '../../ViewComponents/coursepage/course.css';
import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';

class Video extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    return (
      <>
        <div className={'video content'}>
          <ReactPlayer url="https://www.youtube.com/watch?v=wzR0G67-FBM&feature=emb_logo&ab_channel=במהכהלכה" />
          dd
          <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
        </div>
        {/* <div className={"video content"+this.props.view? 'margin-view':''}></div> */}
      </>
    );
  }
}

export default Video;
