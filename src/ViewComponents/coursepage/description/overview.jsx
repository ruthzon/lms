import React, {Component} from 'react';
import '../course.css';

class Overview extends Component {
  constructor() {
    super();
    this.state = {
      // course: this.props.data,
    };
  }

  render() {
    let data = this.props.data.description;
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

export default Overview;
