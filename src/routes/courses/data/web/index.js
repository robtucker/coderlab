export const summary = {
    id: 1,
    slug: "web",
    title: "HTML/CSS",
    subtitle: "The fundamentals of web development",
    description: `Learn professional web development using HTML, CSS and SASS. 
        Kick start your career as a programmer with this practical hands-on course.`,
    difficultyRating: 1,
    icon: {
        img: require('../../../../assets/img/courses/web/icons/html.svg'),
        background: "#c75c5c",
    },
    banner: {
        img: require('../../../../assets/img/courses/web/banners/design.jpg'),
        background: "#68c4b5"
    },
    teacher: {
        name: "Simon Van Blerk",
        subtitle: "Web Developer",
        description: `Simon is a web developer with a focus on user-interfaces and design. 
            He's run various teams over the years and loves agile methodology.`,
        img: require('../../../../assets/img/mentors/simon-van-blerk.jpg'),
        tags: ["javascript", "web", "html", "css"]
    },
    tags: ["javascript", "node"],
    levels: [
        {
            id: 1,
            title: "Intro to HTML",
            description:  `Ever wondered how the internet actually works. Well... wonder no more. 
                In this first level, we'll give you a crash course in what HTML is and how it works.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#c75c5c",
            },
        },
        {
            id: 2,
            title: "Style it up",
            description:  `HTML on its own can be a little boring. Introduce a bit of color with CSS. 
                We'll show you how to customize the look of your website, and what style is really all about`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#c75c5c",
            },
        },
        {
            id: 3,
            title: "Cameras and lighting",
            description:  `Learn professional web development using HTML, CSS and SASS. 
                Kick start your career as a programmer with this practical hands-on course.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#c75c5c",
            },
        },
        {
            id: 4,
            title: "Movement",
            description:  `Learn professional web development using HTML, CSS and SASS. 
                Kick start your career as a programmer with this practical hands-on course.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#c75c5c",
            },
        },
        {
            id: 5,
            title: "Boundaries and hazards",
            description:  `Learn professional web development using HTML, CSS and SASS. 
                Kick start your career as a programmer with this practical hands-on course.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#c75c5c",
            },
        },
        {
            id: 6,
            title: "Game logic and scoring",
            description:  `Learn professional web development using HTML, CSS and SASS. 
                Kick start your career as a programmer with this practical hands-on course.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#c75c5c",
            },
        },
        {
            id: 7,
            title: "Finishing and releasing games",
            description:  `Learn professional web development using HTML, CSS and SASS. 
                Kick start your career as a programmer with this practical hands-on course.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#c75c5c",
            }
        },
    ]
};

// map out the courses into levels, the level id is simply the index 
export const courseMap = [
    'headers-and-list-tags',
    'style-tags-and-color',
    'anchors-and-links',
    'box-model',
    'head-tags-and-doctypes',
    'class-and-id-selectors',
    'images',
    'fonts',
    'forms-and-input',
    'display-and-position'

];  

// export const getLevel = (levelId) => {
    
//     return require.ensure([], (require) => {
//         console.log('getLevel', levelId)
//         let level = require('./' + courseMap[parseInt(levelId) + 1]);

//         if (level && level.default && level.default.length) return level.default
//     });
// }
