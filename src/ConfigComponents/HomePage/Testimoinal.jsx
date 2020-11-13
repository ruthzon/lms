import {FaArrowRight, FaArrowLeft} from 'react-icons/all';
// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import {Card, CardDeck, Form, Carousel} from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import '../../ViewComponents/homepage/App.css';

class Testimoinal extends Component {
  state = {arr: []};
  componentDidMount() {
    let url = 'http://localhost:8000/students/';
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({arr: data.students});
      });
  }
  render() {
    const prev = (
      <button>
        <FaArrowLeft />
      </button>
    );
    const next = (
      <button>
        <FaArrowRight />
      </button>
    );
    return (
      <>
        <section className="test">
          <div className="title">
            <h3>What our students have to say </h3>
          </div>
          {/* <CardDeck className="none"></CardDeck> */}
          <Carousel nextIcon={next} prevIcon={prev} data-interval="false">
            <Carousel.Item>
              <CardDeck>
                {/* <RowTests props={this.state.arr} /> */}
                {this.state.arr.map((item, key) => {
                  return (
                    <Card key={key} className="test-card">
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
              </CardDeck>
            </Carousel.Item>
            <Carousel.Item>
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
                {/* <RowTests props={this.state.arr} /> */}
              </CardDeck>
            </Carousel.Item>
          </Carousel>
        </section>
      </>
    );
  }
}
// class TestCard extends Component {
//   render(props) {
//     return (
//       <Card className="test-card">
//         <Card.Body>
//           <Card.Title>
//             <img src={props.image} alt="Student"></img>
//             {props.name}
//           </Card.Title>
//           <Card.Text>{props.description} </Card.Text>
//         </Card.Body>
//       </Card>
//     );
//   }
// }
// class RowTests extends Component {
//   render(props) {
//     var rows = [];
//     for (var i = 0; i < props.data.length; i++) {
//       console.log(props);
//       console.log(props.data[i]);
//       rows.push(TestCard(props.data[i]));
//     }
//     return rows;
//   }
// }
export default Testimoinal;
