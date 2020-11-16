import {FaSearch} from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Container, Row, Col, InputGroup, FormControl} from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';
import { actions } from '../../Store/actions';
import { connect } from 'react-redux';
import '../configurator.css'

function mapStateToProps(state) {
  return {
    school: state.schoolReducer.school,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setSchoolName: (name) => dispatch(actions.setSchoolName(name)),
  setSchoolTitle: (sub) => dispatch(actions.setSchoolTitle(sub)),
  setSchoolSubtitle: (sub) => dispatch(actions.setSchoolSubtitle(sub)),
  setSchoolImage: (sub) => dispatch(actions.setSchoolImage(sub)),
  setSchoolLogo: (sub) => dispatch(actions.setSchoolLogo(sub)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function Header(props) {
  return (
    <>
      <header>
        <Container>
          <Row>
            <Col className="middle" md="6">
              <h1 className="learn"><textarea value={props.school.title} onChange={e=>props.setSchoolTitle(e.target.value)}/> </h1>
              <h6 className="choose">
              <textarea value={props.school.subtitle} onChange={e=>props.setSchoolSubtitle(e.target.value)}/>
              </h6>
              <InputGroup className="mb-2 search-bar">
                <FormControl
                  placeholder="Search your favourite course"
                  aria-label="Search your favourite course"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">
                    <FaSearch color="white" />
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col md="6">
              <img
                src={process.env.PUBLIC_URL + props.school.image}
                alt="header"
              ></img>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
});

// export default Header;
