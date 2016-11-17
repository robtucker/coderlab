export const courses = [
    {
        id: 1,
        slug: "web",
        title: "HTML/CSS",
        subtitle: "The fundamentals of web development",
        description: `Learn professional web development using HTML, CSS and SASS. 
            Kick start your career as a programmer with this practical hands-on course.`,
        iconClass: "icon-html",
        bannerClass: "img-banner-javascript",
        lessons: [
            {
                id: 1,
                title: "Getting set up in Unity",
                iconClass: "icon-ninja"
            },
            {
                id: 2,
                title: "Game objects",
                iconClass: "icon-ninja"
            },
            {
                id: 3,
                title: "Cameras and lighting",
                iconClass: "icon-ninja"
            },
            {
                id: 4,
                title: "Movement",
                iconClass: "icon-ninja"
            },
            {
                id: 5,
                title: "Boundaries and hazards",
                iconClass: "icon-ninja"
            },
            {
                id: 6,
                title: "Game logic and scoring",
                iconClass: "icon-ninja"
            },
            {
                id: 7,
                title: "Finishing and releasing games",
                iconClass: "icon-ninja"
            },
        ]
    },
    {
        id: 2,
        slug: "game",
        title: "Game Development",
        subtitle: "The fundamentals of game development",
        description: `Learn the Unity game engine, and make your own video game. 
            This beginner level course will guide you through the ABCs of game development.`,
        iconClass: "icon-phone",
        bannerClass: "img-banner-javascript",
        lessons: [
            {
                id: 1,
                title: "Getting set up in Unity",
                iconClass: "icon-ninja"
            },
            {
                id: 2,
                title: "Game objects",
                iconClass: "icon-ninja"
            },
            {
                id: 3,
                title: "Cameras and lighting",
                iconClass: "icon-ninja"
            },
            {
                id: 4,
                title: "Movement",
                iconClass: "icon-ninja"
            },
            {
                id: 5,
                title: "Boundaries and hazards",
                iconClass: "icon-ninja"
            },
            {
                id: 6,
                title: "Game logic and scoring",
                iconClass: "icon-ninja"
            },
            {
                id: 7,
                title: "Finishing and releasing games",
                iconClass: "icon-ninja"
            },
        ]
    },
    {
        id: 3,
        slug: "python",
        title: "Python",
        subtitle: "An entry to programming",
        description: `The most popular programming language of our times, Python is readable fast, and 
            used by beginners and experts alike.`,
        iconClass: "icon-python",
        bannerClass: "img-banner-javascript",
        lessons: [
            {
                id: 1,
                title: "Getting set up in Unity",
                iconClass: "icon-ninja"
            },
            {
                id: 2,
                title: "Game objects",
                iconClass: "icon-ninja"
            },
            {
                id: 3,
                title: "Cameras and lighting",
                iconClass: "icon-ninja"
            },
            {
                id: 4,
                title: "Movement",
                iconClass: "icon-ninja"
            },
            {
                id: 5,
                title: "Boundaries and hazards",
                iconClass: "icon-ninja"
            },
            {
                id: 6,
                title: "Game logic and scoring",
                iconClass: "icon-ninja"
            },
            {
                id: 7,
                title: "Finishing and releasing games",
                iconClass: "icon-ninja"
            },
        ]
    },
    {
        id: 4,
        slug: "javascript",
        title: "Javascript",
        subtitle: "The language of the web",
        description: `From interactive user experiences to real-time chat applications, 
            learn the language of the web with JavaScript.`,
        iconClass: "icon-node",
        bannerClass: "img-banner-javascript",
        lessons: [
            {
                id: 1,
                title: "Getting set up in Unity",
                iconClass: "icon-ninja"
            },
            {
                id: 2,
                title: "Game objects",
                iconClass: "icon-ninja"
            },
            {
                id: 3,
                title: "Cameras and lighting",
                iconClass: "icon-ninja"
            },
            {
                id: 4,
                title: "Movement",
                iconClass: "icon-ninja"
            },
            {
                id: 5,
                title: "Boundaries and hazards",
                iconClass: "icon-ninja"
            },
            {
                id: 6,
                title: "Game logic and scoring",
                iconClass: "icon-ninja"
            },
            {
                id: 7,
                title: "Finishing and releasing games",
                iconClass: "icon-ninja"
            },
        ]
    },
    {
        id: 5,
        slug: "teacher",
        title: "Teacher Training",
        subtitle: "Get the help you need to teach your students",
        description: `Our fun but structured courses are guaranteed to make your students fall in love with programming. 
            We'll give you everything you need.`,
        iconClass: "icon-books",
        bannerClass: "img-banner-javascript",
        lessons: [
            {
                id: 1,
                title: "Getting set up in Unity",
                iconClass: "icon-ninja"
            },
            {
                id: 2,
                title: "Game objects",
                iconClass: "icon-ninja"
            },
            {
                id: 3,
                title: "Cameras and lighting",
                iconClass: "icon-ninja"
            },
            {
                id: 4,
                title: "Movement",
                iconClass: "icon-ninja"
            },
            {
                id: 5,
                title: "Boundaries and hazards",
                iconClass: "icon-ninja"
            },
            {
                id: 6,
                title: "Game logic and scoring",
                iconClass: "icon-ninja"
            },
            {
                id: 7,
                title: "Finishing and releasing games",
                iconClass: "icon-ninja"
            },
        ]
    },
    {
        id: 6,
        slug: "advanced",
        title: "Advanced Programming",
        subtitle: "Computer Science for professionals",
        description: `This course is designed for professional programmers. From compiler design, 
            to machine learning, we'll help you push further than ever before`,
        iconClass: "icon-pen",
        bannerClass: "img-banner-javascript",
        lessons: [
            {
                id: 1,
                title: "Getting set up in Unity",
                iconClass: "icon-ninja"
            },
            {
                id: 2,
                title: "Game objects",
                iconClass: "icon-ninja"
            },
            {
                id: 3,
                title: "Cameras and lighting",
                iconClass: "icon-ninja"
            },
            {
                id: 4,
                title: "Movement",
                iconClass: "icon-ninja"
            },
            {
                id: 5,
                title: "Boundaries and hazards",
                iconClass: "icon-ninja"
            },
            {
                id: 6,
                title: "Game logic and scoring",
                iconClass: "icon-ninja"
            },
            {
                id: 7,
                title: "Finishing and releasing games",
                iconClass: "icon-ninja"
            },
        ]
    } 
];

export const coursesReducer = (state = courses, action) => {

    switch (action.type) {
    default:
        return state;
    }
};
