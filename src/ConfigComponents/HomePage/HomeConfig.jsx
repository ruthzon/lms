import React, {Component, useState} from 'react';
import {Button, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {useParams, useRouteMatch, withRouter} from 'react-router-dom';
import {actions} from '../../Store/actions';
import '../configurator.css';
import {FaAngleDown, FaAngleRight, FaPlus} from 'react-icons/all';
import $ from 'jquery';
import {ConfigCategory, ConfigHeader} from './HomeConfigSections';
// const browserHistory = createBrowserHistory();

function mapStateToProps(state) {
  return {
    school: state.schoolReducer.school,
    styles: state.stylesReducer.styles,
  };
}

const mapDispatchToProps = (dispatch) => ({
  showSchoolByPart: (data) => dispatch(actions.showSchoolByPart(data)),
  setColorSchoolByPart: (data) => dispatch(actions.setColorSchoolByPart(data)),
  addSchoolToServer: (data) => dispatch(actions.addSchoolToServer(data)),
  addNewForSection: (data) => dispatch(actions.addNewForSection(data)),
  addNewForLearning: (data) => dispatch(actions.addNewForLearning(data)),
  initialEmptyCourse: () => dispatch(actions.initialEmptyCourse()),
  setSchoolProp: (data) => dispatch(actions.setSchoolProp(data)),
  setSchoolImage: (data) => dispatch(actions.setSchoolImage(data)),
  setCategories: (data) => dispatch(actions.setCategories(data)),
  setCategoriesImage: (data) => dispatch(actions.setCategoriesImage(data)),
  setColorSchoolByPart: (data) => dispatch(actions.setColorSchoolByPart(data)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(function HomeConfig(props) {
    let match = useRouteMatch();
    let {name} = useParams();
    let {history} = props;
    const addCourse = () => {
      props.initialEmptyCourse();
      history.push('/' + name + '/addCourse');
      // window.location.reload();
    };
    const [choose, setChoose] = useState(0);
    const handleChoose = (click) => {
      if (choose === click) setChoose(0);
      else setChoose(click);
    };
    const handleSave = () => {
      props.addSchoolToServer(props.school);
      // browserHistory.replace('/' + match.params.name);
      // window.location.reload();
      // $.ajax()
    };
    const switchConfigComponent = (name, id) => {
      switch (name) {
        case 'header':
          return (
            <ConfigHeader
              image={props.setSchoolImage}
              school={props.school}
              function={props.setSchoolProp}
              color={props.setColorSchoolByPart}
            />
          );
        case 'category':
          return (
            <ConfigCategory
              id={id}
              image={props.setCategoriesImage}
              school={props.school}
              function={props.setCategories}
            />
          );

        default:
          return 'foo';
      }
    };
    return (
      <>
        <div className="config">
          <button onClick={() => addCourse()}>
            Add Course <FaPlus />
          </button>
          <div>{props.styles.section_config.name}</div>
          <br/>
          {switchConfigComponent(
            props.styles.section_config.name,
            props.styles.section_config.id
          )}

          <div id="bottom_configurtor">
            <Button variant="primary" onClick={handleSave}>
              Save school
            </Button>
          </div>
        </div>
      </>
    );
  })
);
