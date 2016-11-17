export const courses = [
    {
        id: 1,
        slug: "web",
        title: "Web development",
        description: `Learn professional web development using HTML, CSS and Javascript. 
            Kick start your career as a programmer with this practical hands-on course.`,
        iconClass: "icon-ninja",
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
        This  with HTML. CSS and Javascript. This beginner level course will guide you through the ABCs of game development.`,
        iconClass: "icon-ninja",
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
        description: `This simple yet fast language can take you all the way from your first lines of code up to 
        advanced AI. Where ever you are in your Python journey we can push you to the next level`,
        iconClass: "icon-ninja"
    },
    {
        id: 4,
        slug: "node",
        title: "Node development",
        description: `Learn the basics of we design and development, with HTML. CSS and Javascript. 
        This beginner level course is designed to give you a thorough grounding in professional we development.`,
        iconClass: "icon-ninja"
    },
    {
        id: 5,
        slug: "teacher",
        title: "Teacher Training",
        description: `Learn the basics of we design and development, with HTML. CSS and Javascript. 
            This beginner level course is designed to give you a thorough grounding in professional we development.`,
        iconClass: "icon-ninja"
    },
    {
        id: 6,
        title: "Advanced Programming",
        slug: "advanced",
        description: `This course is designed for professional programmers. Whether its compiler design, 
            memory allocation, or algorithms, we'll help you push yourself further than you've ever gone before`,
        iconClass: "icon-ninja"
    } 
];

export const coursesReducer = (state = courses, action) => {

    switch (action.type) {
    default:
        return state;
    }
};
