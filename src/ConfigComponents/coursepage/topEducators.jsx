import {FaArrowLeft, FaArrowRight} from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {CourseCard, FirstRowCourse, SecondRowCourse} from './homepage/Courses';
import React, {Component} from 'react';
import {Button, Card, CardDeck, Image} from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';
import '../../ViewComponents/coursepage/course.css';
import {connect} from 'react-redux';
import {handleImageById} from '../handleImage';
import {actions} from '../../Store/actions';
import Carousel from 'react-elastic-carousel';
import '../HomePage/carousel.css';
// impore './'

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setTopEducatorsImage: (data) => dispatch(actions.setTopEducatorsImage(data)),
  setTopEducatorsProp: (data) => dispatch(actions.setTopEducatorsProp(data)),
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),
});

class TopEducators extends Component {
  constructor() {
    super();
    this.breakPoints = [
      {width: 1, itemsToShow: 1},
      {width: 350, itemsToShow: 2},
      {width: 700, itemsToShow: 3},
    ];
  }
  render() {
    return (
      <section
        onClick={(e) => {
          if (e.target === e.currentTarget)
            this.props.setSectionConfig({name: 'course_top_educators'});
        }}
        className="hover-config"
        id="top"
        style={{backgroundColor: this.props.course.colors.top_educators}}
      >
        <div className="title">
          <button>View all</button>
          <h3>Top Education offers and deals are listed here</h3>
        </div>
        <Carousel
          breakPoints={this.breakPoints}
          itemPadding={[0, 20]}
          className="content"
          ref={(ref) => (this.carousel = ref)}
          renderPagination={({pages, activePage, onClick}) => {
            return (
              <span direction="row" className="paging-scroll">
                {pages.map((page) => {
                  const isActivePage = activePage === page;
                  return (
                    <span
                      className="paging-button"
                      key={page}
                      onClick={() => onClick(page)}
                      active={isActivePage}
                    />
                  );
                })}
              </span>
            );
          }}
        >
          {/* <Carousel.Item> */}
          {/* <CardDeck> */}
          {/* <RowTests props={this.state.arr} /> */}
          {this.props.course.top_educators.map((item, key) => {
            return (
              <>
                <Card
                  key={key}
                  className="top-card hover-config"
                  onClick={() =>
                    this.props.setSectionConfig({
                      name: 'course_top_educators_x',
                      id: key,
                    })
                  }
                >
                  {/* <Card.ImgOverlay >
                          <Image src={item.bg}></Image>
                        </Card.ImgOverlay> */}
                  <Card.Body>
                    <div className="file-upload2">
                      <Image src={item.image}></Image>
                      <input
                        className="hover-config"
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={(e) =>
                          handleImageById(
                            e,
                            this.props.setTopEducatorsImage,
                            key
                          )
                        }
                      />
                    </div>
                    <Card.Text>
                      <input
                        value={item.header}
                        onChange={(e) =>
                          this.props.setTopEducatorsProp([
                            e.target.value,
                            'header',
                            key,
                          ])
                        }
                      />
                    </Card.Text>
                    <Card.Title>
                      {/* <img src={item.content} alt="Student"></img> */}
                      <textarea
                        value={item.content}
                        onChange={(e) =>
                          this.props.setTopEducatorsProp([
                            e.target.value,
                            'content',
                            key,
                          ])
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
                            this.props.setTopEducatorsProp([
                              e.target.value,
                              'discount',
                              key,
                            ])
                          }
                        />
                        %
                      </h6>
                    </div>
                  </Card.Body>
                </Card>
              </>
            );
          })}
          {/* </CardDeck> */}
          {/* </Carousel.Item> */}
        </Carousel>
        <div className="content mt--42">
          <Button
            variant="light"
            onClick={() => this.carousel.slidePrev()}
            className="carousel-left"
          >
            <FaArrowLeft />
          </Button>
          <Button
            variant="light"
            onClick={() => this.carousel.slideNext()}
            className="carousel-right"
          >
            <FaArrowRight />
          </Button>
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopEducators);
// export default TopEducators;
