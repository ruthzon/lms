// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../../ViewComponents/homepage/App.css';
import {Card, CardDeck, Form} from 'react-bootstrap';
import {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../../Store/actions';
import {handleImage, handleImageById} from '../handleImage';

function mapStateToProps(state) {
  return {
    school: state.schoolReducer.school,
  };
}
const mapDispatchToProps = (dispatch) => ({
  setCategories: (name) => dispatch(actions.setCategories(name)),
  setCategoriesImage: (name) => dispatch(actions.setCategoriesImage(name)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function Categories(props) {
  return (
    <>
      <div className="title">
        <Form inline>
          <button id="see-all">See all Categories</button>
        </Form>
        <h3>Choice favourite course from top category</h3>
      </div>
      <CardDeck className="none"></CardDeck>
      {/* Because the first card deck always align to right. */}
      <CardDeck>
        <RowCategories data={props} />
      </CardDeck>
    </>
  );
});
function RowCategories(props) {
  var rows = [];
  for (var i = 0; i < props.data.school.categories.length; i++) {
    rows.push(
      <Card
        className="category-card"
        style={{backgroundColor: props.data.school.categories[i].backcolor}}
      >
        <input
          id={'category-backcolor-' + i}
          type="color"
          className="border-white"
          value={props.data.school.categories[i].backcolor}
          onChange={(e) =>
            props.data.setCategories([
              e.target.value,
              e.target.id.split('-')[1],
              parseInt(e.target.id.split('-')[2]),
            ])
          }
        />
        <div class="file-upload">
          <Card.Img variant="top" src={props.data.school.categories[i].icon} />
          <input
            id={'category-icon-' + i}
            type="file"
            accept=".svg"
            onChange={(e) =>
              handleImageById(
                e,
                props.data.setCategoriesImage,
                parseInt(e.target.id.split('-')[2])
              )
            }
          />
        </div>
        <Card.Body>
          <Card.Title>
            <input
              className="width-webkit"
              id={'category-name-' + i}
              value={props.data.school.categories[i].name}
              onChange={(e) =>
                props.data.setCategories([
                  e.target.value,
                  e.target.id.split('-')[1],
                  parseInt(e.target.id.split('-')[2]),
                ])
              }
            />
          </Card.Title>
        </Card.Body>
      </Card>
    );
  }
  return rows;
}

// function CategoryCard(props) {
//   return (

//   );
// }

// export default Categories;
