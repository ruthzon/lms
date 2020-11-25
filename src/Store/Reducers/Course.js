import produce from 'immer';
import { Course } from '../classes';
import { Courses, ExCourse } from '../data';
import createReducer from './ReducerUtils';


const initialState = {
  course: {
    _id: '0',
    name: 'Enter the name of the course here',
    subtitle: 'Here is a short description of the course and the content that will be taught in it',
    image: './img_from_xd/Image 108@2x.png',
    stars: 3,//להפוך למספר
    views: 0,//להפוך למספר
    weeks:0,
    students_num:0,
    auther: 'Name of the lecturer',
    auther_image: './img_from_xd/Rectangle 22.png',
    price: 'price',
    prev_price: 'prev price',
    language: 'Course language',
    use: 'Use on desktop, tablet & mobile',
    access: 'Full lifetime access',
    certificate: 'Certificate of Completion',
    share: {
      instegram: '',
      facebook: '',
      whatsapp: '',
      twitter: '',
      linkedin: '',
      youtube: '',
      reddit: '',
    },
    belive: {
      text: 'I believe in lifelong learning and Skillfy is a great place to learn from experts. I’ve learned a lot and recommend it to all my friends.',
      auther: 'Riaz Surti | Hearthy Foods',
      image: './img_from_xd/image 116.png',
    },
    description: {
      "Course Description": "See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket.",
      "Certification": "Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretch slingback strap mid kitten heel this ladylike design slingback strap mid kitten heel this ladylike design.",
      "Who this course is for": "Anyone interested in learning about business (only practical concepts that you can use and no boring theory + we won’t cover business topics that are common sense"
    },
    show: {
      stars: true,
      views: true,
      prev_price: true,
      language: true,
      use: true,
      access: true,
      certificate: true,
      students: true,
      weeks: true,
      lessons: true,
      more: {
        more_courses: true,
        belive: true,
        top_educators: true,
        footer: true,
      },
      share: {
        instegram: true,
        facebook: true,
        whatsapp: true,
        twitter: true,
        linkedin: true,
        youtube: true,
        reddit: true,
      },
      description: true,
      "Course Description": true,
      "Certification": true,
      "Who this course is for": true,
    },
    colors: {
      header: '#FEF0EF',
      name: '#5F5982',
      subtitle: '#5F5982',
      buy_course: '#F56962',
      more_courses: '#EFEFF6',
      belive: '#FEF0EF',
      top_educators: '#EFEFF6'
    },
    top_educators: [
      {
        bg: './img_from_xd/path 65.svg',
        image: './img_from_xd/image 61.png',
        header: 'Pass above Rs 250.',
        content: 'Avail 10% off on Testbook',
        color: '#DF4161',
        discount: '10',
      },
      {
        bg: './img_from_xd/path 65-1.svg',
        image: './img_from_xd/image 62.png',
        header: 'Productivity Course a',
        content: 'The Complete Personal',
        color: '#64929F',
        discount: '58',
      },
      {
        bg: './img_from_xd/path 65-1.svg',
        image: './img_from_xd/image 63.png',
        header: 'Up To 58% Off',
        content: 'Get 12-Month Subscription',
        color: '#B3A092',
        discount: '50',
      },
    ],
    // lessons:[1,2,3],
    lessons: [
      { _id: 1, name: "Everything You Need to Know Business", time: "10 weeks" },
      { _id: 2, name: "Everything You Need to Know Business", time: "10 weeks" },
      { _id: 3, name: "Everything You Need to Know Business", time: "10 weeks" },
    ]
  }
};

const mycourse = {
  // initialById(state, action) {
  //   debugger;
  //   console.log(action.payload);    
  //   if (action.payload == '0')
  //     state.course = ExCourse;
  //   else
  //     state.course=Courses[action.payload - 1]
  // },
  // initialCourse(state, action) {
  //   state.course = action.payload;
  // },
  initialEmptyCourse (state) {
    state.course= initialState.course;
  },
  setName(state, action) {
    state.course.name = action.payload;
  },
  setSubtitle(state, action) {
    state.course.subtitle = action.payload;
  },
  setImage(state, action) {
    state.course.image = action.payload;
  },
  setStars(state, action) {
    state.course.stars = action.payload;
  },
  setViews(state, action) {
    state.course.views = action.payload;
  },
  setWeeks(state, action) {
    state.course.weeks = action.payload;
  },
  setLesson(state, action) {
    state.course.lesson = action.payload;
  },
  setAuther(state, action) {
    state.course.auther = action.payload;
  },
  setAutherImage(state, action) {
    state.course.auther_image = action.payload;
  },
  setPrice(state, action) {
    state.course.price = action.payload;
  },
  setPrevPrice(state, action) {
    state.course.prev_price = action.payload;
  },
  setLanguage(state, action) {
    state.course.language = action.payload;
  },
  setDescription(state, action) {
    state.course.description = action.payload;
  },
  setHowIsFor(state, action) {
    state.course.description['Who this course is for'] = action.payload;
  },
  setCertification(state, action) {
    state.course.description['Certification'] = action.payload;
  },
  setCourseDescription(state, action) {
    state.course.description['Course Description'] = action.payload;
  },
  setUse(state, action) {
    state.course.use = action.payload;
  },
  setAccess(state, action) {
    state.course.access = action.payload;
  },
  setCertificate(state, action) {
    state.course.certificate = action.payload;
  },
  setInstegram(state, action) {
    state.course.share.instegram = action.payload;
  },
  setFacebook(state, action) {
    state.course.share.facebook = action.payload;
  },
  setWhatsapp(state, action) {
    state.course.share.whatsapp = action.payload;
  },
  setTwitter(state, action) {
    state.course.share.twitter = action.payload;
  },
  setLinkedin(state, action) {
    state.course.share.linkedin = action.payload;
  },
  setYoutube(state, action) {
    state.course.share.youtube = action.payload;
  },
  setReddit(state, action) {
    state.course.share.reddit = action.payload;
  },
  setBeliveText(state, action) {
    state.course.belive.text = action.payload;
  },
  setBeliveAuther(state, action) {
    state.course.belive.auther = action.payload;
  },
  setBeliveImage(state, action) {
    state.course.belive.image = action.payload;
  },

  setTopEducatorsProp(state, action) {
    //array: [value, prop, index]
    state.course.top_educators[action.payload[2]][action.payload[1]] = action.payload[0];
  },
  setTopEducatorsImage(state, action) {
    //array: [value, prop, index]
    state.course.top_educators[action.payload[1]].image = action.payload[0];
  },
  initialLessons(state, action) {
    state.course.lessons = action.payload;
  },
  addLesson(state, action) {
    state.course.lessons = state.course.lessons.concat(action.payload);
  },
  removeLesson(state, action) {
    state.course.lessons = state.course.lessons.filter((x) => x != action.payload);
  },
  updateLesson(state, action) {
    state.course.lessons = state.course.lessons.map(
      (element, i) => {
        if (element._id == action.payload._id)
          element = action.payload
      })
      debugger;
  },

  setColorHeader(state, action) {
    state.course.colors.header = action.payload;
  },
  setColorName(state, action) {
    state.course.colors.name = action.payload;
  },
  setColorSubtitle(state, action) {
    state.course.colors.subtitle = action.payload;
  },
  setColorBelive(state, action) {
    state.course.colors.belive = action.payload;
  },
  setColorBuyCourse(state, action) {
    state.course.colors.buy_course = action.payload;
  },
  setColorMoreCourses(state, action) {
    state.course.colors.more_courses = action.payload;
  },
  setColorTopEducators(state, action) {
    state.course.colors.top_educators = action.payload;
  },
  // Showwwwww
  showHowIsFor(state) {
    state.course.show['Who this course is for'] = !state.course.show['Who this course is for'];
  },
  showCertification(state) {
    state.course.show['Certification'] = !state.course.show['Certification'];
  },
  showCourseDescription(state) {
    state.course.show['Course Description'] = !state.course.show['Course Description'];
  },
  showStars(state) {
    state.course.show.stars = !state.course.show.stars;
  },
  showViews(state) {
    state.course.show.views = !state.course.show.views;
  },
  showPrevPrice(state) {
    state.course.show.prev_price = !state.course.show.prev_price;
  },
  showDescription(state) {
    state.course.show.description = !state.course.show.description;
  },
  showStudents(state) {
    state.course.show.students = !state.course.show.students;
  },
  showWeeks(state) {
    state.course.show.weeks = !state.course.show.weeks;
  },
  showLessons(state) {
    state.course.show.lessons = !state.course.show.lessons;
  },
  showLanguage(state) {
    state.course.show.language = !state.course.show.language;
  },
  showUse(state) {
    state.course.show.use = !state.course.show.use;
  },
  showAccess(state) {
    state.course.show.access = !state.course.show.access;
  },
  showCertificate(state) {
    state.course.show.certificate = !state.course.show.certificate;
  },
  showInstegram(state) {
    state.course.show.share.instegram = !state.course.show.share.instegram;
  },
  showFacebook(state) {
    state.course.show.share.facebook = !state.course.show.share.facebook;
  },
  showWhatsapp(state) {
    state.course.show.share.whatsapp = !state.course.show.share.whatsapp;
  },
  showTwitter(state) {
    state.course.show.share.twitter = !state.course.show.share.twitter;
  },
  showLinkedin(state) {
    state.course.show.share.linkedin = !state.course.show.share.linkedin;
  },
  showYoutube(state) {
    state.course.show.share.youtube = !state.course.show.share.youtube;
  },
  showReddit(state) {
    state.course.show.share.reddit = !state.course.show.share.reddit;
  },
  showMoreCourses(state) {
    state.course.show.more.more_courses = !state.course.show.more.more_courses;
  },
  showBelive(state) {
    state.course.show.more.belive = !state.course.show.more.belive;
  },
  showTopEducarors(state) {
    state.course.show.more.top_educators = !state.course.show.more.top_educators;
  },
  showCourseFooter(state) {
    state.course.show.more.footer = !state.course.show.more.footer;
  },
};

export default produce(
  (state, action) => createReducer(state, action, mycourse),
  initialState
);
