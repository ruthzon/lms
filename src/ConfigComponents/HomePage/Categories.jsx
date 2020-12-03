// import '../courseConfig/node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../../ViewComponents/homepage/App.css';
import {Card, CardDeck, Form} from 'react-bootstrap';
import {Component} from 'react';
import {connect} from 'react-redux';
import {actions} from '../../Store/actions';
import {handleDelete, handleImage, handleImageById} from '../handleImage';
import {FaTrash} from 'react-icons/fa';

function mapStateToProps(state) {
  return {
    school: state.schoolReducer.school,
  };
}
const mapDispatchToProps = (dispatch) => ({
  setCategories: (name) => dispatch(actions.setCategories(name)),
  setCategoriesImage: (name) => dispatch(actions.setCategoriesImage(name)),
  deleteFromSection: (name) => dispatch(actions.deleteFromSection(name)),
  setSectionConfig: (name) => dispatch(actions.setSectionConfig(name)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function Categories(props) {
  return (
    <>
      <div
        style={{backgroundColor: props.school.colors.categories}}
        onClick={() => props.setSectionConfig({name: 'categories'})}
        className="hover-config"
      >
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
      </div>
    </>
  );
});
function RowCategories(props) {
  var rows = [];
  for (var i = 0; i < props.data.school.categories.length; i++) {
    let x = i;
    rows.push(
      <Card
        onClick={() => props.data.setSectionConfig({name: 'category', id: x})}
        className="category-card hover-trash hover-config"
        style={{backgroundColor: props.data.school.categories[i].backcolor}}
      >
        {/* <input
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
        /> */}
        <div class="file-upload">
          <Card.Img variant="top" src={props.data.school.categories[i].icon} />
          {/* <input
            id={'category-icon-' + i}
            type="file"
            accept=".svg"
            onChange={(e) =>
              handleImageById(
                e,
                props.data.setCategoriesImage,
                parseInt(e.target.id.split('-')[2]
                )
              )
            }
          /> */}
        </div>

        <Card.Body>
          <Card.Title>
            {props.data.school.categories[i].name}
            {/* <input
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
            /> */}
            {/* <FaTrash
              className="trash"
              id={"categories-trash-"+i}
              onClick={(e) =>
                handleDelete(props.data.deleteFromSection, [
                  // parseInt(e.target.id.split('-')[2]), //ind
                  x,
                  "categories", //categories
                ])
              }
            /> */}
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
