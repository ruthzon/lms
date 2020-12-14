class Category {
    constructor(name = 'unnamed', icon = 'FaQuestion', backcolor="black") {
        this.name = name;
        this.icon = icon;
        this.backcolor=backcolor;
    }
}

class Course {
    constructor(id,user_id="",name = 'Course',subtitle='', image, stars = 4.5, views = 28500,lesion="36", auther = "Annonimous",teacher={}, auther_image = '', price="49.65",prev_price="99.99", language="english", description={}) {
        this.id=id;
        this.user_id=user_id;
        this.name = name;
        this.subtitle=subtitle;
        this.image = image;
        this.stars = stars;
        this.views = views;
        this.lesion=lesion
        this.teacher = teacher;
        this.price=price;
        this.prev_price=prev_price;
        this.language=language;
        this.description=description;
    }
}
class Student {
    constructor(name = 'student', image = '', description = '') {
        this.name = name;
        this.image = image;
        this.description = description;
    }
}
class Partner {
    constructor(image) {
        this.image = image;
    }
}
class Learning{
    constructor(id, header, text){
        this.id=id;
        this.header=header;
        this.text=text;
    }
}
export {Student, Partner, Category, Course, Learning}