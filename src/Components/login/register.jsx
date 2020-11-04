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
import { auth, generateUserDocument, signInWithGoogle } from './firebase';
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

const Register = () => {
  const state = {
    type: 'password',
  };

  // const [passwordShown, setPasswordShown] = useState(false);
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState(null);
  const nav = () => {
    browserHistory.replace('/');
    window.location.reload();
  };
  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {displayName});
      nav();
    }
    catch(error){
      setError('Error Signing up with email and password');
    }

    setEmail("");
    setPassword("");
    setDisplayName("");
  };
  const onChangeHandler = (event) => {
    const {name, value} = event.currentTarget;
    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    } else if (name === 'displayName') {
      setDisplayName(value);
    }
  };
  // const signInWithEmailAndPasswordHandler = (event, email, password) => {
  //   event.preventDefault();
  // };

  // const passswordSignIn = () => {
  //   firebase.auth().signInWithEmailAndPassword();
  // };
  const handleClick = () =>
    this.setState(({type}) => ({
      type: type === 'text' ? 'password' : 'text',
    }));

  return (
    <>
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
              <h2>Create your free account</h2>
              <h5>See how the world’s best user experiences are created</h5>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your name"
                    name="displayName"
                    value={displayName}
                    onChange={(event) => onChangeHandler(event)}
                  />
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="userEmail"
                    value={email}
                    placeholder="Example@leader.codes"
                    onChange={(event) => onChangeHandler(event)}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>
                    Password
                    {/* <FaRegStar /> */}
                  </Form.Label>
                  {/* <a href="">Forgot password?</a> */}
                  <InputGroup>
                    <InputGroup.Prepend>
                      {/* <Image src="./img_from_xd/Eyes.svg"></Image> */}
                      <InputGroup.Text onClick={handleClick}>
                        <Image src="./img_from_xd/Eyes.svg"></Image>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type={state.type}
                      name="userPassword"
                      value={password}
                      onChange={(event) => onChangeHandler(event)}
                      placeholder="Enter password"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  //  onClick={this.nav}
                  onClick={(event) => {
                    createUserWithEmailAndPasswordHandler(
                      event,
                      email,
                      password
                    );
                  }}
                >
                  Create your account
                </Button>
                <br />
                <div className="text-center">
                  <span className="or">OR</span>
                  <hr />
                </div>
                <Button onClick={signInWithGoogle} type="submit" variant="light">
                  <Image src="./img_from_xd/gOOGLE.png"></Image>
                  Sign with Google
                </Button>
                <br />
                have an account?
                <a href="/login" className="pink">
                  Sign in
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
    </>
  );
};

export default Register;
