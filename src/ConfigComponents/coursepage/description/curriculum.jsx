import React, {Component} from 'react';
import '../../../ViewComponents/coursepage/course.css';
import {Image, ListGroup, Button} from 'react-bootstrap';
import {actions} from '../../../Store/actions';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setLessonsProp: (data) => dispatch(actions.setLessonsProp(data)),
});
class Curriculum extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }
  render() {
    let course = this.props.course;
    let arr = ['sm', 'sm', 'sm'];
    return course.lessons.map((value, ind) => (
      <ListGroup horizontal={'sm'} className="my-2 curriculum" key={ind}>
        <ListGroup.Item>
          <Image src="./img_from_xd/player (2).svg"></Image>
        </ListGroup.Item>
        <ListGroup.Item>
          <input
            id={'curric-name-' + ind}
            onChange={(e) =>
              this.props.setLessonsProp(
                [e.target.value,
                e.target.id.split('-')[1],
                parseInt(e.target.id.split('-')[2])]
              )
            }
            value={value.name}
          />
          {/* Everything You Need to Know Business */}
          <div>
            <Image src="./img_from_xd/orange clock.svg"></Image>
            <input
              id={'curric-time-' + ind}
              onChange={(e) =>
                this.props.setLessonsProp([
                  e.target.value,
                  e.target.id.split('-')[1],
                  parseInt(e.target.id.split('-')[2]),
                ])
              }
              value={value.time}
            />
          </div>      
        </ListGroup.Item>
        <ListGroup.Item>
          <Button className="btn btn-choose">Start</Button>
        </ListGroup.Item>
      </ListGroup>
    ));
  }
}

// export default Curriculum;
export default connect(mapStateToProps, mapDispatchToProps)(Curriculum);
