import React, {Component, useState} from 'react';
import {
  Button,
  Col,
  Container,
  Row,
  Form,
  Image,
  InputGroup,
} from 'react-bootstrap';
import './login.css';
import {createHashHistory} from 'history';
import {createBrowserHistory} from 'history';
import firebase from '@firebase/app';
import 'firebase/auth';
import {auth, signInWithGoogle} from './firebase';
// var firebase = require('firebase');
// var app = firebase.initializeApp({ ... });

var firebaseConfig = {
  apiKey: 'AIzaSyB9giidNYNmRxYgj3PC4cysla54gHxaNJ4',
  authDomain: 'lms-leader.firebaseapp.com',
  databaseURL: 'https://lms-leader.firebaseio.com',
  projectId: 'lms-leader',
  storageBucket: 'lms-leader.appspot.com',
  messagingSenderId: '451375116419',
  appId: '1:451375116419:web:a631ec62e2e0a0304e6bb6',
  measurementId: 'G-2DZBMG06NZ',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// firebase.initializeApp(firebaseConfig);

const history = createHashHistory();
const browserHistory = createBrowserHistory();

const Login = () => {
  const state = {
    type: 'password',
  };
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  // const [passwordShown, setPasswordShown] = useState(false);
  // const googleSignIn = () => {
  //   let base_provider = new firebase.auth.GoogleAuthProvider();
  //   firebase
  //     .auth()
  //     .signInWithPopup(base_provider)
  //     .then(function (result) {
  //       console.log(result);
  //       console.log('Success..');
  //       nav();
  //     })
  //     .catch(function (err) {
  //       console.log(err);
  //       console.log('Failed..');
  //     });

  //   // firebase.initializeApp(firebaseConfig);
  //   // firebase.analytics();
  // };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    if (!validEmailRegex.test(email)) {
      setEmailError('Email is not valid');
      return;
    }
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return;
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => nav())
      .catch((error) => {
        setError('Error signing in with password and email!');
        console.error('Error signing in with password and email', error);
      });
  };

  const onChangeHandler = (event) => {
    const {name, value} = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    }
  };

  const handleClick = () =>
    this.setState(({type}) => ({
      type: type === 'text' ? 'password' : 'text',
    }));
  const nav = () => {
    browserHistory.replace('/');
    window.location.reload();
  };

  return (
    <>
      {/* <FirebaseAuthProvider firebase={firebase} {...config}> */}
      <div className="login">
        {/* <Button onClick={this.nav}>login</Button> */}
        <Container>
          <Row>
            <Col xs="6" className="left">
              <Image className="size-70" src="./img_from_xd/iMAGE.svg"></Image>
              <h1>Turn your ambition into a success story</h1>
              <p>Choose from over 100,000 online video.</p>
            </Col>
            <Col xs="6" className="right">
              <h2>Hello ! Welcome back.</h2>
              <h5>
                Log in with your data that you entered during Your registration.
              </h5>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="userEmail"
                    value={email}
                    placeholder="Example@leader.codes"
                    onChange={(event) => onChangeHandler(event)}
                  />
                  <Form.Text className="error">{emailError}</Form.Text>
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>
                    Password
                    {/* <FaRegStar /> */}
                  </Form.Label>
                  <a href="">Forgot password?</a>
                  <InputGroup>
                    <InputGroup.Prepend>
                      {/* <Image src="./img_from_xd/Eyes.svg"></Image> */}
                      <InputGroup.Text onClick={handleClick}>
                        <Image src="./img_from_xd/Eyes.svg"></Image>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type={state.type}
                      placeholder="Enter password"
                      name="userPassword"
                      value={password}
                      onChange={(event) => onChangeHandler(event)}
                    />
                  </InputGroup>
                  <Form.Text className="error">{passwordError}</Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  //  onClick={this.nav}
                  onClick={(event) => {
                    signInWithEmailAndPasswordHandler(event, email, password);
                  }}
                >
                  Start now!
                </Button>
                <br />
                <div className="text-center">
                  <span className="or">OR</span>
                  <hr />
                </div>
                <Button
                  onClick={signInWithGoogle}
                  type="submit"
                  variant="light"
                >
                  <Image src="./img_from_xd/gOOGLE.png"></Image>
                  Sign with Google
                </Button>
                <br />
                don't have an account?{' '}
                <a href="/register" className="pink">
                  Sign up
                </a>
                {error !== null && (
                  <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
                    {error}
                  </div>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      {/* </FirebaseAuthProvider> */}
    </>
  );
};

export default Login;
