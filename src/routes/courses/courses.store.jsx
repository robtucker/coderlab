export const courses = [
    {
        id: 1,
        slug: "web",
        title: "HTML/CSS",
        description: `Learn professional web development using HTML, CSS and Javascript. 
            Kick start your career as a programmer with this practical hands-on course.`,
        iconClass: "icon-html",
        outline: [
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
                id: 5,
                title: "Finishing and releasing games",
                iconClass: "icon-ninja"
            },
        ]
    },
    {
        id: 2,
        slug: "game",
        title: "Game Development",
        description: `Make your own video game and get to grips with the Unity ecosystem. 
        This beginner level course will guide you through the ABCs of game development.`,
        iconClass: "icon-phone",
        outline: [
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
                id: 5,
                title: "Finishing and releasing games",
                iconClass: "icon-ninja"
            },
        ]
    },
    {
        id: 3,
        slug: "python",
        title: "Python",
        description: `Python is the most popular programming language of 2017. From simple websites to Artificial Intelligence, 
            Python is suitable for both beginners and experts.`,
        iconClass: "icon-python",
        outline: [
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
                id: 5,
                title: "Finishing and releasing games",
                iconClass: "icon-ninja"
            },
        ]
    },
    {
        id: 4,
        slug: "javascript",
        title: "Javascript",
        description: `JavaScript is the language of the web. From user interfaces in jQuery to real time chat applications in Node,
            JavaScript is probably the most important language of today.
            `,
        iconClass: "icon-node",
        outline: [
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
                id: 5,
                title: "Finishing and releasing games",
                iconClass: "icon-ninja"
            },
        ]
    },
    {
        id: 5,
        slug: "teacher",
        title: "Teacher Training",
        description: `Learn the basics of we design and development, with HTML. CSS and Javascript. 
            This beginner level course is designed to give you a thorough grounding in professional we development.`,
        iconClass: "icon-books",
        outline: [
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
                id: 5,
                title: "Finishing and releasing games",
                iconClass: "icon-ninja"
            },
        ]
    },
    {
        id: 6,
        title: "Advanced Programming",
        slug: "advanced",
        description: `This course is designed for professional programmers. Whether its compiler design, 
            memory allocation, or algorithms, we'll help you push yourself further than you've ever gone before`,
        iconClass: "icon-pen",
        outline: [
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
                id: 5,
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
