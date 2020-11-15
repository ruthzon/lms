import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../../Store/actions';
// import '../coursepage/course.css';

function mapStateToProps(state) {
  return {
    course: state.courseReducer.course,
  };
}

const mapDispatchToProps = (dispatch) => ({
  setName: (data) => dispatch(actions.setName(data)),
  setSubtitle: (data) => dispatch(actions.setSubtitle(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(function help(props) {
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.course) {
  //     console.log(nextProps.course);
  //     this.props.course.push(nextProps.course);
  //     console.log('added' + this.props.course);
  //     debugger;
  //   }
  // }
  
    return (
      <>
      ;lkjhgfddzzsdrtfyuhjbnvcfxdrftyuhjnbvcfrtgyuhjnb vcdfrtgyhujnb
        <div>{props.course.name}</div>
        jhg
        <input onChange={e=>props.setName(e.target.value)}></input>

        {/* <div className={"video content"+this.props.view? 'margin-view':''}></div> */}
      </>
    );
  }
)

// mapStateToProps, mapDispatchToProps)(help);
