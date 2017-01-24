export const summary = {
    id: '6254df79',
    slug: "web",
    type: 'web',
    price: 'Free',
    duration: 'Self-paced',
    location: 'Online',
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
        background: "#539c90"
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
            id: 'a1258ac0',
            title: "Intro to HTML",
            description:  `Ever wondered how the internet actually works. Well... wonder no more. 
                In this first level, we'll give you a crash course in what HTML is and how it works.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#3b3c45",
            },
        },
        {
            id: 'd2dce5f5',
            title: "Style it up!",
            description:  `HTML on its own can be a little boring. Introduce a bit of color with CSS. 
                We'll show you how to customize the look of your website, and what style is really all about`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#3b3c45",
            },
        },
        {
            id: 'c468be84',
            title: "Hypertext References",
            description:  `In this level we'll discuss how information flows around the web and what the word HTTP really means.
                You'll get a solid understanding of how requests work, and how to create links to other pages.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#3b3c45",
            },
        },
        {
            id: '3928123f',
            title: "The Box Model",
            description:  `The Box Model is an essential part of how content is designed and layed out on HTML pages.
                In this level you'll up your design skills by learning all about paddings, margins and borders.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#3b3c45",
            },
        },
        {
            id: 'a2abb898',
            title: "Loading CSS Files",
            description: `Learning how to keep your code neat and tidy is crucial as your website grows. In this chapter
                we'll discuss using separate files, and how different files are loaded in HTML.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#3b3c45",
            },
        },
        {
            id: 'ea551171',
            title: "Selectors for the win",
            description:  `Learn how to style HTML like a pro. We'll discuss the secrets of applying different 
                styles to different elements using classes and ids, and what CSS is really all about.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#3b3c45",
            },
        },
        {
            id: 'a1d49d88',
            title: "Images and graphics",
            description:  `It's hard to make a website look good without pictures. In this level we'll show you the secret 
                art of sizing and positioning images to make your websites look good on any device.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#3b3c45",
            }
        },
        {
            id: '94fa67ca',
            title: "Fonts",
            description:  `With CSS loading different fonts is a piece of cake. We'll discuss the different types of 
                font and give you some guidelines on choosing a good font`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#3b3c45",
            }
        },
        {
            id: '8910e38c',
            title: "Forms and Input",
            description:  `A website wouldn't be very good if you couldn't input data! In this level we'll discuss 
                form inputs and how you send data back to the server`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#3b3c45",
            }
        },
        {
            id: '1de473a0',
            title: "Advanced Layouts",
            description:  `The final cherry on our CSS cake is the subject of layouts. With layouts and positioning 
                under your belt you're going be styling up websites like a boss!`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#3b3c45",
            }
        }
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

