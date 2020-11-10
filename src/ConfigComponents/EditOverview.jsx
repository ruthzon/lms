import React, {Component} from 'react';
import '../ViewComponents/coursepage/course.css';

class EditOverview extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    let data = this.props.course.description;

    return (
      <>
        <div className="overview">
          <h5>Course Description</h5>
          <h6>{data['Course Description']}</h6>
          <h5>Certification</h5>
          <h6>{data.Certification}</h6>
          <h5>Who this course is for</h5>
          <h6>{data['Who this course is for']}</h6>
        </div>
      </>
    );
  }
}

export default EditOverview;
