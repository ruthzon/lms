import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import './App.css';

class CTA extends Component {
  componentDidMount(){
    let url="http://localhost:8000/students/";
    fetch(url).then(res=>res.json())
    .then(data=>{
      console.log(data);
    })

  }
  render() {
    return (
      <section className="cta">
        <h1>It's time to start investing in yourself in learning</h1>
        <h4>
          Match your goals to our programs, explore your options, and map out
          your path to success. I plan to use skillfy for a long time!.
        </h4>
        <button>Get Started</button>
      </section>
    );
  }
}
export default CTA;
