import React from 'react';
import {FaCopy, FaPlus, FaTrash} from 'react-icons/fa';
import {handleDelete, handleIconById, handleImage, handleImageById} from '../handleImage';

export function ConfigHeader(props) {
  let data = props.data;
  return (
    <>
      <h5>Header</h5>
      <br />
      <div>
        Background color
        <input
          type="color"
          value={data.course.colors.header}
          onChange={(e) => data.setColorHeader(e.target.value)}
        />
      </div>
      <div>
        Title
        <input
          type="text"
          onChange={(e) => data.setName(e.target.value)}
          value={data.course.name}
        />
      </div>
      <div>
        subtitle
        <input
          type="text"
          onChange={(e) => data.setSubtitle(e.target.value)}
          value={data.course.subtitle}
        />
      </div>
      <div>
        Stars
        <label class="switch">
          <input
            type="checkbox"
            onClick={data.showStars}
            checked={data.course.show.stars}
          />
          <span class="slider round"></span>
        </label>
      </div>
      <div>
        Students
        <label class="switch">
          <input
            type="checkbox"
            onClick={data.showStudents}
            checked={data.course.show.students}
          />
          <span class="slider round"></span>
        </label>
      </div>
      <div>
        Weeks
        <label class="switch">
          <input
            type="checkbox"
            onClick={data.showWeeks}
            checked={data.course.show.weeks}
          />
          <span class="slider round"></span>
        </label>
      </div>
      <div>
        Lessons
        <label class="switch">
          <input
            type="checkbox"
            onClick={data.showLessons}
            checked={data.course.show.lessons}
          />
          <span class="slider round"></span>
        </label>
      </div>
    </>
  );
}

export function ConfigOverview(props) {
  let {data} = props;
  return (
    <>
      <h5>
        Overview
        <FaPlus
          onClick={(e) =>
            data.addNewForOverview({header: 'title', text: 'text'})
          }
        />
      </h5>
      <br />
      {data.course.description.map((value, key) => {
        return (
          <>
            <div>
              {key + 1}{' '}
              <FaTrash
                onClick={(e) => {
                  handleDelete(data.deleteFromOverview, key);
                }}
              />
              <FaCopy
                onClick={(e) => {
                  data.addNewForOverview({
                    header: value.header,
                    text: value.text,
                  });
                }}
              />
            </div>
            <div>
              Title
              <input
                type="text"
                onChange={(e) =>
                  data.setDescription({
                    id: key,
                    value: e.target.value,
                    key: 'header',
                  })
                }
                value={value.header}
              />
            </div>
            <div>
              Text
              <textarea
                type="text"
                onChange={(e) =>
                  data.setDescription({
                    id: key,
                    value: e.target.value,
                    key: 'text',
                  })
                }
                value={value.text}
              />
            </div>
          </>
        );
      })}
    </>
  );
}

export function ConfigCurriculum(props) {
  // let {data} = props;
  // return (
  //   <>
  //     <h5>
  //       Curriculum
  //       {/* <FaPlus
  //         onClick={(e) =>
  //           data.addLesson({header: 'title', text: 'text'})
  //         }
  //       /> */}
  //     </h5>
  //   </>
  // );
}

export function ConfigCurriculumX(props) {
  // let {data} = props;
  // return (
  //   <>
  //     <h5>
  //       Curriculum
  //       {/* <FaPlus
  //         onClick={(e) =>
  //           data.addLesson({header: 'title', text: 'text'})
  //         }
  //       /> */}
  //     </h5>
  //   </>
  // );
}

export function ConfigBuyCourse(props) {
  let {data} = props;
  return (
    <>
      <h5>Course card </h5>

      <div>
        Price
        <label class="switch">
          <input
            type="checkbox"
            onClick={data.showPrice}
            checked={data.course.show.price}
          />
          <span class="slider round"></span>
        </label>
        {data.course.show.price && (
          <input
            type="text"
            onChange={(e) => data.setPrice(e.target.value)}
            value={data.course.price}
          />
        )}
      </div>
      {data.course.show.price && (
        <div>
          Previos price
          <label class="switch">
            <input
              type="checkbox"
              onClick={data.showPrevPrice}
              checked={data.course.show.prev_price}
            />
            <span class="slider round"></span>
          </label>
          {data.course.show.prev_price && (
            <input
              type="text"
              onChange={(e) => data.setPrevPrice(e.target.value)}
              value={data.course.prev_price}
            />
          )}
        </div>
      )}
      {data.course.show.prev_price && data.course.show.price && (
        <div>
          Time to previos price
          <label class="switch">
            <input
              type="checkbox"
              onClick={data.showPrevPriceTime}
              checked={data.course.show.prev_price_time}
            />
            <span class="slider round"></span>
          </label>
          {data.course.show.prev_price_time && (
            <input
              type="text"
              onChange={(e) => data.setPrevPriceTime(e.target.value)}
              value={data.course.prev_price_time}
            />
          )}
        </div>
      )}
      <div>
        Image
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          onChange={(e) => handleImage(e, data.setImage)}
        />
      </div>
    </>
  );
}

export function ConfigBuyCourseShare(props) {
  let {data} = props;
  return (
    <>
      <h5>
        Course card
        {/* <FaPlus
          onClick={(e) =>
            data.addLesson({header: 'title', text: 'text'})
          }
        /> */}
      </h5>
      <div>
        Instegram
        <label class="switch">
          <input
            type="checkbox"
            onClick={data.showInstegram}
            checked={data.course.show.share.instegram}
          />
          <span class="slider round"></span>
        </label>
        {data.course.show.share.instegram && (
          <input
            type="text"
            placeholder="instegram"
            onChange={(e) => data.setInstegram(e.target.value)}
            value={data.course.share.instegram}
          />
        )}
      </div>
      <div>
        Facebook
        <label class="switch">
          <input
            type="checkbox"
            onClick={data.showFacebook}
            checked={data.course.show.share.facebook}
          />
          <span class="slider round"></span>
        </label>
        {data.course.show.share.facebook && (
          <input
            type="text"
            placeholder="facebook"
            onChange={(e) => data.setFacebook(e.target.value)}
            value={data.course.share.facebook}
          />
        )}
      </div>
      <div>
        Whatsapp
        <label class="switch">
          <input
            type="checkbox"
            onClick={data.showWhatsapp}
            checked={data.course.show.share.whatsapp}
          />
          <span class="slider round"></span>
        </label>
        {data.course.show.share.whatsapp && (
          <input
            type="text"
            placeholder="whatsapp"
            onChange={(e) => data.setWhatsapp(e.target.value)}
            value={data.course.share.whatsapp}
          />
        )}
      </div>
      <div>
        Twitter
        <label class="switch">
          <input
            type="checkbox"
            onClick={data.showTwitter}
            checked={data.course.show.share.twitter}
          />
          <span class="slider round"></span>
        </label>
        {data.course.show.share.twitter && (
          <input
            type="text"
            placeholder="twitter"
            onChange={(e) => data.setTwitter(e.target.value)}
            value={data.course.share.twitter}
          />
        )}
      </div>
      <div>
        Youtube
        <label class="switch">
          <input
            type="checkbox"
            onClick={data.showYoutube}
            checked={data.course.show.share.youtube}
          />
          <span class="slider round"></span>
        </label>
        {data.course.show.share.youtube && (
          <input
            type="text"
            placeholder="youtube"
            onChange={(e) => data.setYoutube(e.target.value)}
            value={data.course.share.youtube}
          />
        )}
      </div>
      <div>
        Reddit
        <label class="switch">
          <input
            type="checkbox"
            onClick={data.showReddit}
            checked={data.course.show.share.reddit}
          />
          <span class="slider round"></span>
        </label>
        {data.course.show.share.reddit && (
          <input
            type="text"
            placeholder="reddit"
            onChange={(e) => data.setReddit(e.target.value)}
            value={data.course.share.reddit}
          />
        )}
      </div>
    </>
  );
}
export function ConfigBuyCourseInfo(props) {
  let {data} = props;
  return (
    <>
      <h5>
        Footer
        <FaPlus
          onClick={(e) =>
            data.addNewForInfo({
              name: 'Write info here',
              icon: './img_from_xd/book.svg',
            })
          }
        />
      </h5>
      {data.course.course_info.map((value, key) => {
        return (
          <>
            <span>
              {key + 1}
              <FaTrash
                onClick={(e) => {
                  handleDelete(data.deleteFromInfo, key);
                }}
              />
              <FaCopy
                onClick={(e) => {
                  data.addNewForInfo({
                    name: value.name,
                    icon: value.icon,
                  });
                }}
              />
            </span>
            <div>
              Info
              <input
                type="text"
                value={value.name}
                onChange={(e) =>
                  data.setCourseInfo({
                    id: key,
                    key: 'name',
                    value: e.target.value,
                  })
                }
              />
            </div>
            <div>
              Icon
              <input
                type="file"
                accept=".svg"
                onChange={(e) => handleIconById(e, data.setCourseInfo,key)}
              />
            </div>
            <br></br>
          </>
        );
      })}
    </>
  );
}

export function ConfigMoreCourses(props) {
  let data=props.data;
  return (
    <>
      <h5>More courses</h5>
      <div>
        Background color
        <input
          type="color"
          value={data.course.colors.more_courses}
          onChange={(e) => data.setColorMoreCourses(e.target.value)}
        />
      </div>
      <div>
        Show this section
        <label className="switch">
          <input
            type="checkbox"
            onClick={(e) => data.showMoreCourses()}
            checked={data.course.show.more_courses}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </>
  );
}
