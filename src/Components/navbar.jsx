import 'bootstrap/dist/css/bootstrap.min.css';
import {FaSearch, FaShoppingCart, FaComment} from 'react-icons/all';
import React, {useContext} from 'react';
import './homepage/App.css';
import {Button, Navbar, Nav, Form, NavDropdown, Image} from 'react-bootstrap';
import {UserContext} from './login/userProvider';
import {auth} from './login/firebase';
// const history = createHashHistory();
// const browserHistory = createBrowserHistory();

function Navigation() {
  const user = useContext(UserContext);
  // const {photoURL, displayName, email} = user;
  // const navigate=() =>{
  //   // browserHistory.replace('/courses/:'+JSON.stringify( data));
  //   browserHistory.replace('/login');
  //   window.location.reload();
  // }
  return (
    <>
      <Navbar>
        <Navbar.Brand href="#home">
          <span id="education">
            <FaComment color="white" flip="horizontal" />
          </span>
          Education{' '}
        </Navbar.Brand>
        <Nav className="mr-auto">
          <NavDropdown title="Home" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Pages" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> Action </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Courses" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> Action </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Features" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> Action </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Blog" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> Action </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Shop" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> Action </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <div>
            <FaSearch color="#707070" />
            <FaShoppingCart />
          </div>
          {user===undefined && (
            <Button
              variant="outline-primary"
              className="register"
              onClick={() => (window.location.href = '/register')}
            >
              Register
            </Button>
          )}
          {user !==null && user!==undefined &&(
            <>
            <Image className="user-img" src={user.photoURL}/>
            <span>{user.displayName}</span>

            <Button
              variant="outline-primary"
              className="register"
              onClick={() => {auth.signOut()}}
            >
              Log out
            </Button>
            </>
          )}
        </Form>
      </Navbar>
    </>
  );
}
export default Navigation;
