import {FaArrowLeft, FaArrowRight} from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {CourseCard, FirstRowCourse, SecondRowCourse} from './homepage/Courses';
import React, {Component} from 'react';
import {Card, CardDeck, Image, Carousel} from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';
import '../../ViewComponents/coursepage/course.css';
import {connect} from 'react-redux';
import {handleImageById} from '../handleImage';
import {actions} from '../../Store/actions';

// impore './'

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setTopEducatorsImage: (data) => dispatch(actions.setTopEducatorsImage(data)),
  setTopEducatorsProp: (data) => dispatch(actions.setTopEducatorsProp(data)),
});

class TopEducators extends Component {
  render() {
    const prev = (
      // <button onClick={dispatchDiscreteEvent} className="carousel-left">
      <button className="carousel-left">
        <FaArrowLeft />
      </button>
    );
    const next = (
      <button className="carousel-right">
        <FaArrowRight />
      </button>
    );
    return (
      <section
        id="top"
        style={{backgroundColor: this.props.course.colors.top_educators}}
      >
        <div className="title">
          <button>View all</button>
          <h3>Top Education offers and deals are listed here</h3>
        </div>
        <Carousel
          autoPlay={false}
          nextIcon={next}
          prevIcon={prev}
          data-interval="false"
        >
          <Carousel.Item>
            <CardDeck>
              {/* <RowTests props={this.state.arr} /> */}
              {this.props.course.top_educators.map((item, key) => {
                return (
                  <>
                    <Card key={key} className="top-card">
                      {/* <Card.ImgOverlay >
                          <Image src={item.bg}></Image>
                        </Card.ImgOverlay> */}
                      <Card.Body>
                        <div class="file-upload2">
                          <Image src={item.image}></Image>
                          <input
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            onChange={(e) =>
                              handleImageById(
                                e,
                                this.props.setTopEducatorsImage
                              )
                            }
                          />
                        </div>
                        <Card.Text>
                          <input
                            value={item.header}
                            onChange={(e) =>
                              this.props.setTopEducatorsProp(
                                [e.target.value,
                                "header",
                                key]
                              )
                            }
                          />
                        </Card.Text>
                        <Card.Title>
                          {/* <img src={item.content} alt="Student"></img> */}
                          <textarea
                            value={item.content}
                            onChange={(e) =>
                              this.props.setTopEducatorsProp(
                                [e.target.value,
                                "content",
                                key]
                              )
                            }
                          />
                        </Card.Title>
                        <div
                          style={{backgroundColor: item.color}}
                          className="discount"
                        >
                          Total Discount <br />
                          <h6>
                          <input
                            value={item.discount}
                            onChange={(e) =>
                              this.props.setTopEducatorsProp(
                                [e.target.value,
                                "discount",
                                key]
                              )
                            }
                          />
                            %</h6>
                        </div>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}
            </CardDeck>
          </Carousel.Item>
        </Carousel>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopEducators);
// export default TopEducators;
