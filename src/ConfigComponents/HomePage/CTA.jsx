// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../../Store/actions';
import '../../ViewComponents/homepage/App.css';

function mapStateToProps(state) {
  return {
    school: state.schoolReducer.school,
  };
}
const mapDispatchToProps = (dispatch) => ({
  setCta: (name) => dispatch(actions.setCta(name)),
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),

});

class CTA extends Component {
  // componentDidMount(){
  //   let url="http://localhost:8000/students/";
  //   fetch(url).then(res=>res.json())
  //   .then(data=>{
  //     console.log(data);
  //   })

  // }
  render() {
    return (
      <div
        onClick={() => this.props.setSectionConfig({name: 'cta'})}
        className="hover-config"
      >
        <section
          onClick={() => this.props.setSectionConfig({name: 'categories'})}
          className="cta white"
          style={{backgroundColor: this.props.school.colors.CTA}}
        >
          <h1>
            <input
              className="white width-webkit"
              id="cta-title"
              value={this.props.school.CTA.title}
              onChange={(e) =>
                this.props.setCta([e.target.value, e.target.id.split('-')[1]])
              }
            />
          </h1>
          <h4>
            <em>
              <textarea
                className="white height-100 font-size-14"
                id="cta-text"
                value={this.props.school.CTA.text}
                onChange={(e) =>
                  this.props.setCta([e.target.value, e.target.id.split('-')[1]])
                }
              />
            </em>
          </h4>
          <button style={{ backgroundColor: this.props.school.colors.button ,borderColor: this.props.school.colors.fontButton }}
            onClick={(e) => {
              this.props.setSectionConfig({ name: 'school_buttons' });
            }}>
         <p style={{color: this.props.school.colors.fontButton }}>Get Start</p> 
          </button>
        </section>
      </div>
    );
  }
}
// export default CTA;
export default connect(mapStateToProps, mapDispatchToProps)(CTA);
