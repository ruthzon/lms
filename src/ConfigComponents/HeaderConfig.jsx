import React, {useContext} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import {
  FaRegStar,
  FaRegEye,
  FaRegPlayCircle,
  FaRegClock,
} from 'react-icons/all';
import {UserContext} from '../login/userProvider';
import {Link} from 'react-router-dom';
import './configurator.css'
function HeaderConfig(props) {
  const user = useContext(UserContext);

  return (
    <>
      <div className="header-config">
       jhg
      </div>
    </>
  );
}

export default HeaderConfig;
