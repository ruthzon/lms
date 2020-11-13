import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../../../Store/actions';
import '../../../ViewComponents/coursepage/course.css';

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setCertification: (data) => dispatch(actions.setCertification(data)),
  setCourseDescription: (data) => dispatch(actions.setCourseDescription(data)),
  setHowIsFor: (data) => dispatch(actions.setHowIsFor(data)),
});

class Overview extends Component {
  constructor() {
    super();
    this.state = {
      // course: this.props.data,
    };
  }

  render() {
    let data = this.props.course.description;
    // console.log(this.props.data.description);
    // console.log(JSON.parse(this.props.data.description));
    console.log(data);
    return (
      <>
        <div className="overview">
          {/* {this.props.data.description.Certification} */}
          {/* {data}
          {data.map((item, key) => {
            return (
              <>
                <h5>{key}</h5>
                <h6>{item}</h6>
                <a>fads</a>
              </>
            );
          })} */}
          {data['Course Description'] && (
            <>
              <h5>Course Description</h5>
              <h6><textarea onChange={(e) => this.props.setCourseDescription(e.target.value)} value={data['Course Description']}></textarea></h6>
            </>
          )}
          {data['Certification'] && (
            <>
              <h5>Certification</h5>
              <h6><textarea onChange={(e) => this.props.setCertification(e.target.value)} value={data.Certification}></textarea></h6>
            </>
          )}
          {data['Who this course is for'] && (
            <>
              <h5>Who this course is for</h5>
              <h6><textarea onChange={(e) => this.props.setHowIsFor(e.target.value)} value={data['Who this course is for']}></textarea></h6>
            </>
          )}
        </div>
      </>
    );
  }
}

// export default Overview;

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
