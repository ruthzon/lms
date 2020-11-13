import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../../Store/actions';
import '../coursepage/course.css';

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setName: (data) => dispatch(actions.setName(data)),
  setSubtitle: (data) => dispatch(actions.setSubtitle(data)),
});

class help extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.course) {
      console.log(nextProps.course);
      this.props.course.push(nextProps.course);
      console.log('added' + this.props.course);
      debugger;
    }
  }
  render() {
    return (
      <>
        <div className={'content'}>{this.props.course.name}</div>
        {/* <div className={"video content"+this.props.view? 'margin-view':''}></div> */}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(help);
