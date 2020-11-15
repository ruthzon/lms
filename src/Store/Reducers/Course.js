import produce from 'immer';
import { Course } from '../classes';
import { Courses, ExCourse } from '../data';
import createReducer from './ReducerUtils';


const initialState = {
  course: {
    id: '0',
    user_id: '',
    name: 'Enter the name of the course here',
    subtitle: 'Here is a short description of the course and the content that will be taught in it',
    image: './img_from_xd/Image 108@2x.png',
    stars: '?? stars',
    views: '?? views',
    lessons: '?? ',
    auther: 'Name of the lecturer',
    auther_image: './img_from_xd/Rectangle 22.png',
    price: 'price',
    prev_price: 'prev price',
    language: 'Course language',
    use:'Use on desktop, tablet & mobile',
    access:'Full lifetime access',
    certificate:'Certificate of Completion',
    share:{
      instegram:'',
      facebook:'',
      whatsapp:'',
      twitter:'',
      linkedin:'',
      youtube:'',
      reddit:'',
    },
    description: {
      "Course Description": "See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket.",
      "Certification": "Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretch slingback strap mid kitten heel this ladylike design slingback strap mid kitten heel this ladylike design.",
      "Who this course is for": "Anyone interested in learning about business (only practical concepts that you can use and no boring theory + we won’t cover business topics that are common sense"
    },
    show:{
      stars:true,
      views:true,
      prev_price:true,
      language:true,
      use:true,
      access:true,
      certificate:true,
      students:true,
      weeks:true,
      lessons:true,
      share:{
        instegram:true,
        facebook:true,
        whatsapp:true,
        twitter:true,
        linkedin:true,
        youtube:true,
        reddit:true,
      },
      description: true,
      "Course Description": true,
      "Certification": true,
      "Who this course is for": true,
    }
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
  setName(state, action) {
    state.course.name = action.payload;
    debugger;
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
  setUse(state, action){
    state.course.use=action.payload;
  },
  setAccess(state, action){
    state.course.access= action.payload;
  },
  setCertificate (state, action){
    state.course.certificate = action.payload;
  },
  setInstegram (state, action){
    state.course.share.instegram = action.payload;
  },
  setFacebook (state, action){
    state.course.share.facebook = action.payload;
  },
  setWhatsapp (state, action){
    state.course.share.whatsapp = action.payload;
  },
  setTwitter (state, action){
    state.course.share.twitter = action.payload;
  },
  setLinkedin (state, action){
    state.course.share.linkedin = action.payload;
  },
  setYoutube (state, action){
    state.course.share.youtube = action.payload;
  },
  setReddit (state, action){
    state.course.share.reddit = action.payload;
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
  showStars(state){
    state.course.show.stars=!state.course.show.stars;
  },
  showViews(state){
    state.course.show.views=!state.course.show.views;
  },
  showPrevPrice(state){
    state.course.show.prev_price=!state.course.show.prev_price;
  },
  showDescription(state){
    state.course.show.description=!state.course.show.description;
  },
  showStudents(state){
    state.course.show.students=!state.course.show.students;
  },
  showWeeks(state){
    state.course.show.weeks=!state.course.show.weeks;
  },
  showLessons(state){
    state.course.show.lessons=!state.course.show.lessons;
  },
  showLanguage(state){
    state.course.show.language=!state.course.show.language;
  },
  showUse(state){
    state.course.show.use=!state.course.show.use;
  },
  showAccess(state){
    state.course.show.access=!state.course.show.access;
  },
  showCertificate (state){
    state.course.show.certificate =!state.course.show.certificate;
  },
  showInstegram (state){
    state.course.show.share.instegram = !state.course.show.share.instegram;
  },
  showFacebook (state){
    state.course.show.share.facebook = !state.course.show.share.facebook;
  },
  showWhatsapp (state){
    state.course.show.share.whatsapp = !state.course.show.share.whatsapp;
  },
  showTwitter (state){
    state.course.show.share.twitter = !state.course.show.share.twitter;
  },
  showLinkedin (state){
    state.course.show.share.linkedin = !state.course.show.share.linkedin;
  },
  showYoutube (state){
    state.course.show.share.youtube =!state.course.show.share.youtube;
  },
  showReddit (state){
    state.course.show.share.reddit = !state.course.show.share.reddit;
  },

};

export default produce(
  (state, action) => createReducer(state, action, mycourse),
  initialState
);
