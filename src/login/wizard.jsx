import React, {Component, useEffect} from 'react';
import '../ViewComponents/homepage/App.css';
import { connect } from 'react-redux';
import history from '../history';

// const history = createBrowserHistory();

// import $ from jquery

export const getCookie = (c_name) => {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(c_name + '=');
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      let c_end = document.cookie.indexOf(';', c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return '';
};

const usernameCheck = (user) => {
  const jwt = getCookie('jwt');

  // let jwt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJ3ZGtwNUQyaFJPYzRYSmJCY3FkdzlDOUM3T3gyIiwiZW1haWwiOiJydXRoem9uQGxlYWRlci5jb2RlcyIsImlwIjoiMTk1LjYwLjIzNS4xNDEiLCJpYXQiOjE2MDU3ODA2MDh9.StX-QtG8q4z2JvJ4VFMZQn2PYkb0vqo00Vbmn0GNlFU";
  // let myUid="wdkp5D2hROc4XJbBcqdw9C9C7Ox2"

  const value = document.querySelector('input#usernameInput').value;
  const data = {token: jwt, usernameToCheck: value};
  fetch('https://lms.leader.codes/register/usernameCheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: jwt,
    },
    body: JSON.stringify(data),
  })
    .then(($) => $.json())
    .then(($) => {
      if (!$.availability) {
        document.querySelector('#errMsg').innerText =
          'The username is already taken. Please choose another username.';
      } else {
        alert('Username available and created!');
        history.replace('/' + user.userName + '/addCourse');
        // window.location.reload();
        // window.location.href = "https://lms.leader.codes/" + $.userName + '/addCourse'
      }
    });
};

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
  };
}

class Wizard extends Component {
  render() {
    return (
      <div className="auth">
        <div
          className="auth__main"
          style={{
            backgroundImage: 'url(./img_from_xd/bg-login-finish-mobile.jpg)',
          }}
        >
          <div className="auth__wrap">
            <div className="auth__preview">
              <img
                className="auth__pic"
                src="assets/img/logo-white.svg"
                width="48"
                alt="Logo"
              />
            </div>
            <div className="auth__title title title_xl">Welcome to Leader</div>
            <div className="auth__subtitle title title_sm">
              Enter your details to proceed further
            </div>
          </div>
        </div>
        <div className="auth__container">
          <div className="auth__inner">
            <div className="auth__head">
              <div className="auth__title title title_xl">
                <p>Welcome to Leader.</p>
              </div>
              <p>
                Please select a username to complete the registration process
              </p>
            </div>
            <form className="auth__form" id="loginFrom" method="post">
              <div className="field auth__field">
                <div className="field__label">Username</div>
                <div className="field__wrap">
                  <input
                    id="usernameInput"
                    name="username"
                    className="field__input"
                    type="text"
                    placeholder="Start typing…"
                  />
                  <div className="field__icon">
                    <i className="la la-user "></i>
                  </div>
                </div>
              </div>
              <input type="hidden" name="submitedFlag" />
              <div className="auth__btns">
                <a
                  id="signupBtn"
                  className="btn btn_light auth__btn"
                  style={{userSelect: 'none', cursor: 'pointer'}}
                  onClick={e=>usernameCheck(this.props.user)}
                >
                  Continue
                </a>
              </div>
              <div id="errMsg" style={{color: 'red'}}></div>
            </form>
          </div>
        </div>
        <div
          className="auth__bg"
          style={{backgroundImage: ' url(assets/img/bg-login-sign-in.jpg)'}}
        ></div>
        <div
          id="wait"
          style={{
            display: 'none',
            zIndex: '2',
            position: 'absolute',
            top: '50%',
            left: '50%',
          }}
        >
          <img
            src="https://cdn.dribbble.com/users/225707/screenshots/2958729/attachments/648705/straight-loader.gif"
            width="64"
            height="64"
          />
          <br />
          Loading..
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)( Wizard)
