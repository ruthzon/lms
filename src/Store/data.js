import { Category, Course, Student, Partner, Learning } from './classes'

export const Categories = [
    new Category("Design", "./img_from_xd/Layer 2.svg", "#EFEFF6"),
    new Category("Development", "./img_from_xd/Layer 2-2.svg", "#FEF3E8"),
    new Category("IT & Software", "./img_from_xd/monitor.svg", "#DDF7FF"),
    new Category("Bussiness", "./img_from_xd/Layer 2-20.svg", "#E6FAEA"),
    new Category("Marketing", "./img_from_xd/Layer 2-21.svg", "#EFEFF6"),
    new Category("Photpgraghy", "./img_from_xd/Layer 2-3.svg", "#DDF7FF")
];
const description = {
    "Course Description": "See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket.",
    "Certification": "Effortless comfortable full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant court shoe work duty stretch slingback strap mid kitten heel this ladylike design slingback strap mid kitten heel this ladylike design.",
    "Who this course is for": "Anyone interested in learning about business (only practical concepts that you can use and no boring theory + we won’t cover business topics that are common sense"
}
export const ExCourse = new Course(
    '0',
    '',
    'Enter the name of the course here',
    'Here is a short description of the course and the content that will be taught in it',
    './img_from_xd/Image 108@2x.png',
    '?? stars',
    '?? views',
    '?? ',
    'Name of the lecturer',
    './img_from_xd/Rectangle 22.png',
    'price',
    'prev price',
    'Course language',
    description
)
export const Courses = [

    new Course(
        '1',
        'Sx9WW4LfAPgyVN1lX2exwRbwNTo2',
        'Everything You Need to Know About Business',
        'Here you will learn about business administration, economics, management and proper business maintenance. ',
        './img_from_xd/105@2x.jpg',
        '5',
        '1',
        '36',
        'Nicole Brown',
        './img_from_xd/Rectangle 22.png',
        '49.65$',
        '99.99$',
        'English',
        description
    ),
    new Course(
        '2',
        'Sx9WW4LfAPgyVN1lX2exwRbwNTo2',
        'Statistics Data Science and Business Analysis',
        'Special lesons, from Dr. Daniel Levin - You must it!!',
        './img_from_xd/Image 109.png',
        '9',
        '2',
        '36',
        'Nicole Brown',
        './img_from_xd/Rectangle 22.png',
        '49.65$',
        '99.99$',
        'English',
        description
    ),
    new Course(
        '3',
        'Sx9WW4LfAPgyVN1lX2exwRbwNTo2',
        'Adobe Masterclass Photoshop, Illustrator, XD & InDesign',
        'Learn graphic design today with Photoshop, Illustrator, Adobe XD, InDesign & more in this Adobe CC Masterclass!',
        './img_from_xd/Image 108@2x.png',
        '8',
        '3',
        '36',
        'Nicole Brown',
        './img_from_xd/Rectangle 22.png',
        '49.65$',
        '99.99$',
        'English',
        description
    ),
    new Course(
        '4',
        'wdkp5D2hROc4XJbBcqdw9C9C7Ox2',
        'Statistics Data Science and Business Analysis',
        'Special course, and amazing lessons, from Dr. Daniel Levin - You must ...',
        './img_from_xd/Image 23.png',
        '10',
        '4',
        '36',
        'Nicole Brown',
        './img_from_xd/Rectangle 22.png',
        '49.65$',
        '99.99$',
        'English',
        description
    ),
    new Course(
        '5',
        'Sx9WW4LfAPgyVN1lX2exwRbwNTo2',
        'Everything You Need to Know About Business',
        'Here you will learn about business administration, economics, management and proper business maintenance. ',
        './img_from_xd/Image 110.png',
        '15 ',
        '5',
        '36',
        'Nicole Brown',
        './img_from_xd/Rectangle 22.png',
        '49.65$',
        '99.99$',
        'English',
        description
    ),
    new Course(
        '6',
        'bXGxgqHJxDOfKTRHSHBJ6VIl5gr2',
        'Adobe Masterclass Photoshop, Illustrator, XD & InDesign',
        'Learn graphic design today with Photoshop, Illustrator, Adobe XD, InDesign & more in this Adobe CC Masterclass!',
        './img_from_xd/Image 25.png',
        '4.5',
        '6',
        '36',
        'Nicole Brown',
        './img_from_xd/Rectangle 22.png',
        '49.65$',
        '99.99$',
        'English',
        description
    ),
];
//removed to mongo.db
// export const Students = [
//     new Student("Rebecca Moore", './img_from_xd/User.png', "Skillfy is a life saver. I don’t have the time money for a college education. My goal is to become a freelance web designer and thanks to Skillfy."),
//     new Student("Samatha R. Oiler", './img_from_xd/User-1.png', "Skillfy is a life saver. I don’t have the time money for a college education. My goal is to become a freelance web designer and thanks to Skillfy."),
//     new Student("Sarah D. Thomas", './img_from_xd/User-2.png', "Skillfy is a life saver. I don’t have the time money for a college education. My goal is to become a freelance web designer and thanks to Skillfy.")
// ];
export const Partners = [
    new Partner("./img_from_xd/Image 9.png"),
    new Partner("./img_from_xd/Image 10.png"),
    new Partner("./img_from_xd/Image 11.png"),
    new Partner("./img_from_xd/Image 12.png"),
    new Partner("./img_from_xd/Image 13.png"),
    new Partner("./img_from_xd/Image 14.png"),
];
export const Learnings = [
    new Learning('01.', 'Go at your own pace', 'Find what you are intersted to learn online and choose what exactly best for you that you really passionate to learn and get to study about it'),
    new Learning('02.', 'Learn from industry experts', 'Find what you are intersted to learn online and choose what exactly best for you that you really passionate to learn and get to study about it'),
    new Learning('03.', 'Find video courses on almost any topic', 'Find what you are intersted to learn online and choose what exactly best for you that you really passionate to learn and get to study about it'),
];
