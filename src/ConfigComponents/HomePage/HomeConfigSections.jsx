import React from 'react';
import {FaCopy, FaPlus, FaTrash} from 'react-icons/fa';
import {handleDelete, handleImage, handleImageById} from '../handleImage';

export function ConfigHeader(props) {
  return (
    <>
      <div>
        Background color
        <input
          type="color"
          value={props.school.colors.header}
          onChange={(e) => props.color([e.target.value, 'header'])}
        />
      </div>
      <div>
        Title
        <input
          type="color"
          value={props.school.colors.title}
          onChange={(e) => props.color([e.target.value, 'title'])}
        />
        <input
          type="text"
          onChange={(e) =>
            props.function({prop: 'title', data: e.target.value})
          }
          value={props.school.title}
        />
      </div>
      <div>
        subtitle
        <input
          type="color"
          value={props.school.colors.subtitle}
          onChange={(e) => props.color([e.target.value, 'subtitle'])}
        />
        <input
          type="text"
          onChange={(e) =>
            props.function({prop: 'subtitle', data: e.target.value})
          }
          value={props.school.subtitle}
        />
      </div>

      <div>
        Select image
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={(e) => handleImage(e, props.image)}
          style={{backgroundImage: props.school.image}}
          files={props.school.image}
          // onChange={(e) =>
          //   props.function({prop: 'subtitle', data: e.target.value})
          // }
          // value={props.school.image}
        />
      </div>
    </>
  );
}

export function ConfigCategory(props) {
  let {data, id} = props;
  let thisCategory = props.school.categories[id];
  return (
    <>
      <h5>
        Categoty
        <FaPlus
          onClick={(e) =>
            data.addNewForSection([
              {
                name: 'Name',
                icon: './img_from_xd/Layer 2.svg',
                backcolor: '#FFF',
              },
              'categories',
            ])
          }
        />
        <FaTrash
          onClick={(e) =>
            handleDelete(data.deleteFromSection, [id, 'categories'])
          }
        />
        <FaCopy
          onClick={(e) =>
            data.addNewForSection([
              {
                name: thisCategory.name,
                icon: thisCategory.icon,
                backcolor: thisCategory.name.backcolor,
              },
              'categories',
            ])
          }
        />
      </h5>
      <div>
        Name
        <input
          type="text"
          value={data.school.categories[id].name}
          onChange={(e) => props.function([e.target.value, 'name', id])}
        />
      </div>
      <div>
        Background color
        <input
          id={'category-backcolor-' + id}
          type="color"
          className="border-white"
          value={data.school.categories[id].backcolor}
          onChange={(e) =>
            props.function([e.target.value, 'backcolor', props.id])
          }
        />
      </div>
      <div>
        Icon
        <input
          type="file"
          accept=".svg"
          onChange={(e) => handleImageById(e, props.image, props.id)}
          style={{backgroundImage: data.school.image}}
          files={data.school.image}
          // onChange={(e) =>
          //   props.function({prop: 'subtitle', data: e.target.value})
          // }
          // value={props.school.image}
        />
      </div>
    </>
  );
}

export function ConfigCategories(props) {
  return (
    <>
      <h5>
        Categories
        <FaPlus
          onClick={(e) =>
            props.data.addNewForSection([
              {
                name: 'Name',
                icon: './img_from_xd/Layer 2.svg',
                backcolor: '#FFF',
              },
              'categories',
            ])
          }
        />
      </h5>
      <div>
        Background color
        <input
          type="color"
          value={props.school.colors.categories}
          onChange={(e) => props.color([e.target.value, 'categories'])}
        />
      </div>
      <div>
        Show this section
        <label className="switch">
          <input
            type="checkbox"
            onClick={(e) => props.show('categories')}
            checked={props.school.show.categories}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
}

export function ConfigGetChoice(props) {
  return (
    <>
      <div>
        Background color
        <input
          type="color"
          value={props.school.colors.getChoice}
          onChange={(e) => props.color([e.target.value, 'getChoice'])}
        />
      </div>
      <div>
        Show this section
        <label className="switch">
          <input
            type="checkbox"
            onClick={(e) => props.show('getChoice')}
            checked={props.school.show.getChoice}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
}

export function ConfigLearning(props) {
  return (
    <>
      <h5>Learning platform</h5>
      <div>
        Background color
        <input
          type="color"
          value={props.school.colors.learning}
          onChange={(e) => props.color([e.target.value, 'learning'])}
        />
      </div>
      <div>
        Show this section
        <label className="switch">
          <input
            type="checkbox"
            onClick={(e) => props.show('learning')}
            checked={props.school.show.learning}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div>
        Title
        <input
          type="text"
          onChange={(e) => props.function(e.target.value)}
          value={props.school.learning.header}
        />
      </div>
      <div>
        Image
        <input
          type="file"
          accept=".jpg, .png, .jpeg"
          onChange={(e) => handleImage(e, props.image)}
        />
      </div>
    </>
  );
}

export function ConfigWorldSelection(props) {
  return (
    <>
      <h5>World Selection</h5>
      <div>
        Background color
        <input
          type="color"
          value={props.school.colors.worldSelection}
          onChange={(e) => props.color([e.target.value, 'worldSelection'])}
        />
      </div>
      <div>
        Show this section
        <label className="switch">
          <input
            type="checkbox"
            onClick={(e) => props.show('worldSelection')}
            checked={props.school.show.worldSelection}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
}

export function ConfigCTA(props) {
  debugger;
  let {data} = props.data;
  return (
    <>
      <h5>CTA</h5>
      <div>
        Background color
        <input
          type="color"
          value={props.school.colors.CTA}
          onChange={(e) => props.color([e.target.value, 'CTA'])}
        />
      </div>
      <div>
        Show this section
        <label className="switch">
          <input
            type="checkbox"
            onClick={(e) => props.show('CTA')}
            checked={props.school.show.CTA}
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div>
        Title
        <input
          type="text"
          onChange={(e) => data.setCta([e.target.value, 'title'])}
          value={props.school.CTA.title}
        />
      </div>
      <div>
        Text
        <input
          type="text"
          onChange={(e) => data.setCta([e.target.value, 'text'])}
          value={props.school.CTA.text}
        />
      </div>
    </>
  );
}
