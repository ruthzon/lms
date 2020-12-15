import {FaArrowRight, FaArrowLeft, FaTrash} from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import {Container, Row, Col, Form, Image} from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';
import {actions} from '../../Store/actions';
import {connect} from 'react-redux';
import {handleImageById,handleDelete} from '../handleImage';
import Carousel from 'react-elastic-carousel';
import './carousel.css';


function mapStateToProps(state) {
  return {
    school: state.schoolReducer.school,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setPartners: (sub) => dispatch(actions.setPartners(sub)),
  deleteFromSection: (name) => dispatch(actions.deleteFromSection(name)),
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class OurPartner extends Component {
    constructor() {
      super();
      this.breakPoints = [
        {width: 1, itemsToShow: 2},
        {width: 550, itemsToShow: 4},
        {width: 1000, itemsToShow: 6},
      ];
    }
    goto(num) {
      this.carousel.goTo(num);
    }
    render() {
      let props = this.props;
      return (
        <>
          <section
          onClick={(e) => {
            if (e.target === e.currentTarget)
              this.props.setSectionConfig({name: 'partner'});
          }}
            className="partner hover-config"
            style={{backgroundColor: props.school.colors.partners}}
          >
            <div className="title">
              <Form inline>
                <button onClick={() => this.carousel.slidePrev()}>
                  <FaArrowLeft />
                </button>
                <button onClick={() => this.carousel.slideNext()}>
                  <FaArrowRight />
                </button>
              </Form>
              <h3>Trusted by our awesome partners</h3>
            </div>
          
            <Carousel
              className="content"
              breakPoints={this.breakPoints}
              ref={(ref) => (this.carousel = ref)}
            >
              {props.school.partners.map((item, key) => {
                return (
                  <div key={key} onClick={() =>
                    this.props.setSectionConfig({name: 'partner-x', id: key})
                  } className="hover-trash hover-config">
                    <div class="file-upload2 hover-img">
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
                      <Image src={item} thumbnail />

                      
                    </div>
                  </div>
                );
              })}
            </Carousel>
          </section>
        </>
      );
    }
  }
);
