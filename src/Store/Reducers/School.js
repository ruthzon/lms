import produce from 'immer';
import { Course } from '../classes';
import { Courses, ExCourse } from '../data';
import createReducer from './ReducerUtils';


const initialState = {
  school: {
    id: '0',
    name: "School's name",
    title: 'Learn new skills online with top educators',
    subtitle: 'Choose from over 100,000 online video courses with new additions published every month.',
    logo: './img_from_xd/Image 108@2x.png',
    image: './img_from_xd/Image 117.png',
    categories: [
      { name: "Design", icon: "./img_from_xd/Layer 2.svg", backcolor: "#EFEFF6" },
      { name: "Development", icon: "./img_from_xd/Layer 2-2.svg", backcolor: "#FEF3E8" },
      { name: "IT & Software", icon: "./img_from_xd/monitor.svg", backcolor: "#DDF7FF" },
      { name: "Bussiness", icon: "./img_from_xd/Layer 2-20.svg", backcolor: "#E6FAEA" },
      { name: "Marketing", icon: "./img_from_xd/Layer 2-21.svg", backcolor: "#EFEFF6" },
      { name: "Photpgraghy", icon: "./img_from_xd/Layer 2-3.svg", backcolor: "#DDF7FF" },
    ],
    CTA: {
      title: "It's time to start investing in yourself in learning",
      text: 'Match your goals to our programs, explore your options, and map out your path to success. I plan to use skillfy for a long time!.'
    },

    learning:
    {
      header: 'We will help you learn what you are passionates about',
      image: './img_from_xd/Image.png',
      info: [
        { id: '01.', header: 'Go at your own pace', text: 'Find what you are intersted to learn online and choose what exactly best for you that you really passionate to learn and get to study about it' },
        { id: '02.', header: 'Learn from industry experts', text: 'Find what you are intersted to learn online and choose what exactly best for you that you really passionate to learn and get to study about it' },
        { id: '03.', header: 'Find video courses on almost any topic', text: 'Find what you are intersted to learn online and choose what exactly best for you that you really passionate to learn and get to study about it' },
      ],
    },
    testimoinal:
      [
        { name: "Rebecca Moore", image: './img_from_xd/User.png', description: "Skillfy is a life saver. I don’t have the time money for a college education. My goal is to become a freelance web designer and thanks to Skillfy." },
        { name: "Samatha R. Oiler", image: './img_from_xd/User-1.png', description: "Skillfy is a life saver. I don’t have the time money for a college education. My goal is to become a freelance web designer and thanks to Skillfy." },
        { name: "Sarah D. Thomas", image: './img_from_xd/User-2.png', description: "Skillfy is a life saver. I don’t have the time money for a college education. My goal is to become a freelance web designer and thanks to Skillfy." },
      ],
    partners: [
      "./img_from_xd/Image 9.png",
      "./img_from_xd/Image 10.png",
      "./img_from_xd/Image 11.png",
      "./img_from_xd/Image 12.png",
      "./img_from_xd/Image 13.png",
      "./img_from_xd/Image 14.png",
    ],
    // footer: {
    //   "Company": ["About", "Careers", "Press", "Blog", "Affiliates",],
    //   "Community": [ "Go Premium", "Team Plans", "Refer a Friend", "Gift Cards", "Scholarships",],
    //   3: [],
    //   4: [],
    // },
    show: {
      categories: true,
      CTA: true,
      learning: true,
      testimoinal: true,
      partners: true,
      footer: true,
    },
    colors: {
      header: '#FEF0EF',
      title: '#5F5982',
      subtitle: '#5F5982',
      categories: '#5F5982',
      CTA: '#F56962',
      learning: '#EFEFF6',
      testimoinal: '#FEF0EF',
      partners: '#EFEFF6',
      footer: '#282834',
    }

  }
};

const myschool = {
  setSchoolName(state, action) {
    state.school.name = action.payload;
  },
  setSchoolSubtitle(state, action) {
    state.school.subtitle = action.payload;
  },
  setSchoolTitle(state, action) {
    state.school.title = action.payload;
  },
  setSchoolImage(state, action) {
    state.school.image = action.payload;
  },
  setSchoolLogo(state, action) {
    state.school.logo = action.payload;
  },
  setLearningHeader(state, action) {
    state.school.learning.header = action.payload;
  },
  setLearningImage(state, action) {
    state.school.learning.image = action.payload;
  },
  setLearning(state, action) {
    state.school.learning.info[action.payload[2]][action.payload[1]] = action.payload[0];
  },
  setCta(state, action) {
    state.school.CTA[action.payload[1]] = action.payload[0];
  },
  setCategories(state, action) {
    debugger
    state.school.categories[action.payload[2]][action.payload[1]] = action.payload[0];
  },

  setColorSchoolHeader(state, action) {
    state.school.colors.header = action.payload;
  },
  setColorSchoolTitle(state, action) {
    state.school.colors.title = action.payload;
  },
  setColorSchoolSubtitle(state, action) {
    state.school.colors.subtitle = action.payload;
  },
  setColorSchoolCategories(state, action) {
    state.school.colors.categories = action.payload;
  },
  setColorSchoolCTA(state, action) {
    state.school.colors.CTA = action.payload;
  },
  setColorSchoolLearning(state, action) {
    state.school.colors.learning = action.payload;
  },
  setColorSchoolTestimoinal(state, action) {
    state.school.colors.testimoinal = action.payload;
  },
  setColorSchoolPartners(state, action) {
    state.school.colors.partners = action.payload;
  },
  setColorSchoolFooter(state, action) {
    state.school.colors.footer = action.payload;
  },
  setCTAText(state, action) {
    state.school.CTA.text = action.payload;
  },
  setCTATitle(state, action) {
    state.school.CTA.title = action.payload;
  },

  // Showwwwww
  showTestimoinal(state) {
    state.school.show.testimoinal = !state.school.show.testimoinal;
  },
  showCategories(state) {
    state.school.show.categories = !state.school.show.categories;
  },
  showCTA(state) {
    state.school.show.CTA = !state.school.show.CTA;
  },
  showLearning(state) {
    state.school.show.learning = !state.school.show.learning;
  },
  showPartners(state) {
    state.school.show.partners = !state.school.show.partners;
  },
  showSchoolFooter(state) {
    state.school.show.footer = !state.school.show.footer;
  },


};
export default produce(
  (state, action) => createReducer(state, action, myschool),
  initialState
);
