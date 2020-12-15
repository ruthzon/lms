import React, {Component} from 'react';
import '../../ViewComponents/coursepage/course.css';
import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';
import {connect} from 'react-redux';
import {Player} from 'video-react';

const gapi = window.gapi;
function mapStateToProps(state) {
  return {
    lesson: state.lessonReducer.lesson,
  };
}

class Video extends Component {
  componentDidMount() {
    // gapi.load('client:auth2', function () {
    //   gapi.auth2.init({client_id: 'YOUR_CLIENT_ID'});
    // });
  }
  // authenticate = () => {
  //   return gapi.auth2
  //     .getAuthInstance()
  //     .signIn({scope: 'https://www.googleapis.com/auth/youtube.readonly'})
  //     .then(
  //       function () {
  //         console.log('Sign-in successful');
  //       },
  //       function (err) {
  //         console.error('Error signing in', err);
  //       }
  //     );
  // };
  // loadClient = () => {
  //   gapi.client.setApiKey('YOUR_API_KEY');
  //   return gapi.client
  //     .load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
  //     .then(
  //       function () {
  //         console.log('GAPI client loaded for API');
  //       },
  //       function (err) {
  //         console.error('Error loading GAPI client for API', err);
  //       }
  //     );
  // };
  // // Make sure the client is loaded and sign-in is complete before calling this method.
  // execute = () => {
  //   return gapi.client.youtube.channels
  //     .list({
  //       part: ['snippet,contentDetails,statistics'],
  //       id: ['UC_x5XG1OV2P6uZZ5FSM9Ttw'],
  //     })
  //     .then(
  //       function (response) {
  //         // Handle the results here (response.result has the parsed body).
  //         console.log('Response', response);
  //       },
  //       function (err) {
  //         console.error('Execute error', err);
  //       }
  //     );
  // };

  // _onReady(event) {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // }
  render() {
    // https://developers.google.com/youtube/player_parameters
    // const opts = {
    //   height: '390',
    //   width: '640',
    //   playerVars: this.props.lesson.settings,
    // };
    return (
      <>
        <div className={'content'}>
          {/* <ReactPlayer url="https://www.youtube.com/watch?v=wzR0G67-FBM&feature=emb_logo&ab_channel=במהכהלכה" />
          dd */}
          {/* <button onclick={() => this.authenticate().then(this.loadClient)}>
            authorize and load
          </button>
          <button onclick={this.execute}>execute</button> */}
          {/* <YouTube
            videoId={this.props.lesson.lesson_url}
            opts={opts}
            onReady={this._onReady}
          /> */}
          {/* <Player>
            <source src="https://www.youtube.com/watch?v=aS-4U5GgdjM&feature=emb_logo&ab_channel=AvrahamFried%D7%90%D7%91%D7%A8%D7%94%D7%9D%D7%A4%D7%A8%D7%99%D7%93" />
          </Player> */}
          <ReactPlayer
            volume={1}
            muted={this.props.lesson.settings.muted}
            controls={this.props.lesson.settings.controls}
            loop={this.props.lesson.settings.loop}
            url={this.props.lesson.lesson_url}
          
          />
        </div>
        {/* <div className={"video content"+this.props.view? 'margin-view':''}></div> */}
      </>
    );
  }
}
export default connect(mapStateToProps, null)(Video);
// export default Video;
