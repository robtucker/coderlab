export const summary = {
    id: '1c3da4c3',
    slug: "unity",
    title: "Game Development",
    type: 'individual',
    price: '£600',
    location: 'London',    
    duration: '2 days',
    prerequisites: ['Javascript'],
    subtitle: "The fundamentals of Unity game development",
    description: `Learn the Unity game engine, and make your own video game. 
        This beginner level course will guide you through the ABCs of game development.`,
    difficultyRating: 3,
    icon: {
        img: require('./assets/icons/phone.svg'),
        background: "#3b3c45",
    },
    banner: {
        img: require('./assets/banners/frog.png'),
        //background: "#3f51b5"
        background: "#c75c5c"
    },
    teacher: {
        id: 5,
        name: "Roberto Nygaard",
        subtitle: "PHP Developer",
        description: `Roberto is a CTO with 10 years of experience in PHP, Java and Database Design. 
            He's currently building a platform where developers can find jobs at Snap.hr`,
        img: require('../../../../assets/img/mentors/roberto-nygaard.jpg'),
        tags: ["javascript", "php", "databases"]
    },
    tags: ["game", "unity", "video"],
    levels: [
        {
            id: '84eb2976',
            title: "Getting set up in Unity",
            description:  `Get accustomed to the Unity interface and how games are laid out.
                Discover the tricks and shortcuts that make working with Unity a breeze.`,
            icon: {
                img: require('./assets/icons/phone.svg'),
                background: "#3b3c45",
            },
        },
        {
            id: '39311194',
            title: "Game objects",
            description:  `Build the elements of your game, from players to environments, 
                as reusable objects that can be moved and manipulated.`,
            icon: {
                img: require('./assets/icons/phone.svg'),
                background: "#3b3c45",
            },
        },
        {
            id: '0386f59b',
            title: "Cameras and lighting",
            description:  `Learn how to position cameras in both first and third person,
                and get to grips with professional techniques for lighting your scenes`,
            icon: {
                img: require('./assets/icons/phone.svg'),
                background: "#3b3c45",
            },
        },
        {
            id: '9b00bc5a',
            title: "Movement",
            description:  `Movement and animation are amongst the hardest aspects of game development.
                In this basic introduction we'll teach you how to navigate and control objects using a key pad`,
            icon: {
                img: require('./assets/icons/phone.svg'),
                background: "#3b3c45",
            },
        },
        {
            id: '7daddfb4',
            title: "Boundaries and hazards",
            description:  `Make objects interact with other in a realistic way that follows the laws of physics.
                Understand the basics of the Unity physics engine and how to handle collisions.`,
            icon: {
                img: require('./assets/icons/phone.svg'),
                background: "#3b3c45",
            },
        },
        {
            id: '2be7862f',
            title: "Game logic and scoring",
            description:  `Learn how to create levels, scoring systems, and player stats that give structure to your games,
                and keep players coming back for more.`,
            icon: {
                img: require('./assets/icons/phone.svg'),
                background: "#3b3c45",
            },
        },
        {
            id: 'a22cbbab',
            title: "Finishing and releasing games",
            description:  `One of the huge advantages of Unity is that you can package your game for any platform, 
                including pc, playstation and the web.`,
            icon: {
                img: require('./assets/icons/phone.svg'),
                background: "#3b3c45",
            }
        },
    ]
}