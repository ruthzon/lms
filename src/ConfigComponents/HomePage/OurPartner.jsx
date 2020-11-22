import {FaArrowRight, FaArrowLeft} from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Container, Row, Col, Form, Image} from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';
import {actions} from '../../Store/actions';
import {connect} from 'react-redux';
import { handleImageById } from '../handleImage';

function mapStateToProps(state) {
  return {
    school: state.schoolReducer.school,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setPartners: (sub) => dispatch(actions.setPartners(sub)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function OurPartner(props) {
  return (
    <>
      <section className="partner"  style={{backgroundColor: props.school.colors.partners}}>
        <div className="title">
          <Form inline>
            <button>
              <FaArrowLeft />
            </button>
            <button>
              <FaArrowRight />
            </button>
          </Form>
          <h3>Trusted by our awesome partners</h3>
        </div>
        <Container>
          <Row>
            {props.school.partners.map((item, key) => {
              return (
                <Col xs={4} md={2} key={key}>
                  <div class="file-upload">
                  <Image src={item} thumbnail />
                    <input
                      id={'partners-' + key}
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      onChange={(e) =>
                        handleImageById(
                          e,
                          props.setPartners,
                          parseInt(e.target.id.split('-')[1])
                        )
                      }
                    />
                  </div>
                </Col>
              );
            })}
            {/* <RowPartners data={props.data} /> */}
          </Row>
        </Container>
      </section>
    </>
  );
});

// function RowPartners(props) {
//   var rows = [];
//   for (var i = 0; i < props.data.length; i++) {
//     rows.push();
//   }
//   return rows;
// }
// export default OurPartner;
