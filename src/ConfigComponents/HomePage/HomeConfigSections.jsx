import React from 'react';
import {handleImage, handleImageById} from '../handleImage';

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
          onChange={(e) =>
            props.color([e.target.value, 'title'])
          }
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
          onChange={(e) =>
            props.color([e.target.value, 'subtitle'])
          }
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
  debugger;
  return (
    <>
      <div>
        Name
        <input
          type="text"
          value={props.school.categories[props.id].name}
          onChange={(e) => props.function([e.target.value, 'name', props.id])}
        />
      </div>
      <div>
        Background color
        <input
          id={'category-backcolor-' + props.id}
          type="color"
          className="border-white"
          value={props.school.categories[props.id].backcolor}
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
