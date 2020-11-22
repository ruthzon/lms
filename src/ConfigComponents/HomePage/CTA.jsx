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
      <section className="cta white"  style={{backgroundColor: this.props.school.colors.CTA}}>
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
        <button>Get Started</button>
      </section>
    );
  }
}
// export default CTA;
export default connect(mapStateToProps, mapDispatchToProps)(CTA);
