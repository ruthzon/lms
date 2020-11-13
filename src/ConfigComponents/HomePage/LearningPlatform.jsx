// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';
import '../../ViewComponents/homepage/App.css';

function LearningPlatform(props) {
  return (
    <section className="learning-platform">
      <div className="title">
        <h3>We will help you learn what you are passionates about </h3>
      </div>
      <Container>
        <Row>
          <Col xs="6">
            <Image src="./img_from_xd/Image.png"></Image>
          </Col>
          <Col xs="6" className="lerning">
            {/* <div>
              <span>01.</span>
              <div className="header-learning">Go at your own pace</div>
              <div className="text-learning">Find what you are intersted to learn online and choose what exactly best for you that you really passionate to learn and get to study about it</div>
            </div>
            <div>
              <span>02.</span>
              <div className="header-learning">Learn from industry experts</div>
              <div className="text-learning">Find what you are intersted to learn online and choose what exactly best for you that you really passionate to learn and get to study about it</div>
            </div>
            <div>
              <span>03.</span>
              <div  className="header-learning">Find video courses on almost any topic</div>
              <div className="text-learning">Find what you are intersted to learn online and choose what exactly best for you that you really passionate to learn and get to study about it</div>
            </div> */}
            <RowLearning data={props.data}/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function RowLearning(props) {
  var rows = [];
  for (var i = 0; i < props.data.length; i++) {
    rows.push(            
      <div>
      <span>{props.data[i].id}</span>
      <div  className="header-learning">{props.data[i].header}</div>
      <div className="text-learning">{props.data[i].text}</div>
    </div>
    );
  }
  return rows;
}
export default LearningPlatform;
