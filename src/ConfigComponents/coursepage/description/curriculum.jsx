import React, {Component} from 'react';
import '../../../ViewComponents/coursepage/course.css';
import {Image, ListGroup, Button} from 'react-bootstrap';

class Curriculum extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return ['sm', 'sm', 'sm'].map((breakpoint, idx) => (
      <ListGroup horizontal={breakpoint} className="my-2 curriculum" key={idx}>
        <ListGroup.Item>
          <Image src="./img_from_xd/player (2).svg"></Image>
        </ListGroup.Item>
        <ListGroup.Item>Everything You Need to Know Business
          <div> <Image src="./img_from_xd/orange clock.svg"></Image> Duration 10 weeks</div>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button className="btn btn-choose">Try with Pro</Button>
        </ListGroup.Item>
      </ListGroup>
    ));
  }
}

export default Curriculum;
