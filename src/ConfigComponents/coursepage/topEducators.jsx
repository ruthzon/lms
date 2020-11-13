import {
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {CourseCard, FirstRowCourse, SecondRowCourse} from './homepage/Courses';
import React, {Component} from 'react';
import {
  Card,
  CardDeck,
  Image,
  Carousel,
} from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';
import '../../ViewComponents/coursepage/course.css';
// impore './'
class TopEducators extends Component {
  // state = {arr: []};
  // componentDidMount() {
  //   let url = 'http://localhost:8000/students/';
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       this.setState({arr: data.students});
  //     });
  // }
  state = {
    arr: [
      {
        bg: './img_from_xd/path 65.svg',
        image: './img_from_xd/image 61.png',
        header: 'Pass above Rs 250.',
        content: 'Avail 10% off on Testbook',
        color: '#DF4161',
        discount: '10',
      },
      {
        bg: './img_from_xd/path 65-1.svg',
        image: './img_from_xd/image 62.png',
        header: 'Productivity Course a',
        content: 'The Complete Personal',
        color: '#64929F',
        discount: '58',
      },
      {
        bg: './img_from_xd/path 65-1.svg',
        image: './img_from_xd/image 63.png',
        header: 'Up To 58% Off',
        content: 'Get 12-Month Subscription',
        color: '#B3A092',
        discount: '50',
      },
    ],
  };
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
      <section id="top">
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
              {this.state.arr.map((item) => {
                return (
                  <>
                    <Card className="top-card">
                      {/* <Card.ImgOverlay >
                          <Image src={item.bg}></Image>
                        </Card.ImgOverlay> */}
                      <Card.Body>
                        <Image src={item.image}></Image>
                        <Card.Text>{item.header} </Card.Text>
                        <Card.Title>
                          {/* <img src={item.content} alt="Student"></img> */}
                          {item.content}
                        </Card.Title>
                        <div
                          style={{backgroundColor: item.color}}
                          className="discount"
                        >
                          Total Discount <br />
                          <h6>{item.discount}%</h6>
                        </div>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}
            </CardDeck>
          </Carousel.Item>
          {/*<Carousel.Item>
            <CardDeck>
              {this.state.arr.map((item) => {
                return (
                  <Card className="test-card">
                    <Card.Body>
                      <Card.Title>
                        <img src={item.image} alt="Student"></img>
                        {item.name}
                      </Card.Title>
                      <Card.Text>{item.description} </Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
              {/* <RowTests props={this.state.arr} /> 
            </CardDeck>
          </Carousel.Item> */}
        </Carousel>
      </section>
    );
  }
}
export default TopEducators;
