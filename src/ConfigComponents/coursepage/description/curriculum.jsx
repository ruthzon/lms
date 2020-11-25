import React, {Component} from 'react';
import '../../../ViewComponents/coursepage/course.css';
import {Image, ListGroup, Button} from 'react-bootstrap';
import {actions} from '../../../Store/actions';
import {connect} from 'react-redux';
import {createHashHistory} from 'history';
import {createBrowserHistory} from 'history';
import {useRouteMatch,useLocation} from 'react-router-dom';

const history = createHashHistory();
const browserHistory = createBrowserHistory();

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({
  // setLessonsProp: (data) => dispatch(actions.setLessonsProp(data)),
});
class Curriculum extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
    // const location = useLocation()
    // console.log("name"+location.pathname)
    // const name = this.props.match.params.name;
  }
  navigate = (lesson) => {
    // browserHistory.replace('/courses/:'+JSON.stringify( data));
    let name=browserHistory.location.pathname.split('/')[1];
    debugger
    browserHistory.replace('/'+name+'/' + this.props.course.name + '/' + lesson);
    window.location.reload();
    console.log();
  };
  render() {
    
    console.log(this.props)
    let course = this.props.course;
    // let arr = ['sm', 'sm', 'sm'];
    return course.lessons.map((value, ind) => (
      <ListGroup horizontal={'sm'} className="my-2 curriculum" key={ind}>
        <ListGroup.Item>
          <Image src="./img_from_xd/player (2).svg"></Image>
        </ListGroup.Item>
        <ListGroup.Item>
          {value.name}
          {/* Everything You Need to Know Business */}
          <div>
            <Image src="./img_from_xd/orange clock.svg"></Image>
           Duration {value.time}
            
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button className="btn btn-choose" onClick={e=>this.navigate(ind)}>
            Start
          </Button>
        </ListGroup.Item>
      </ListGroup>
    ));
  }
}

// export default Curriculum;
export default connect(mapStateToProps, mapDispatchToProps)(Curriculum);
