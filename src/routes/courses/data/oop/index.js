export const summary = {
    id: 'c38b16dc',
    slug: "oop",
    title: "Object-Oriented Programming",
    type: 'individual',
    price: '£300',
    duration: '1 day',
    location: 'London',
    subtitle: "A map of programming design patterns",
    description: `You can sit this course using any programming language. We'll be teaching you how to think 
        about programming at a higher level of abstraction.`,
    difficultyRating: 4,
    icon: {
        img: require('../../../../assets/img/courses/teacher/icons/books.svg'),
        background: "#3b3c45",
    },
    banner: {
        img: require('../../../../assets/img/courses/teacher/banners/kids.png'),
        background: "#E53463"
    },
    teacher: {
        id: 1,
        name: "Rob Tucker",
        subtitle: "Python Developer",
        description: `Rob is a Python developer with a love for natural language processing, linguistics 
            and compiler design. He also plays piano and has a dog named Izzy.`,
        img: require('../../../../assets/img/mentors/rob-tucker.jpg'),
        tags: ["javascript", "python"]
    },
    levels: [
        {
            id: '6cfd4a41',
            title: "Yeah but what are classes really?",
            description:  `Classes are the basis of most programming languages, so they are well worth understanding in depth!
                To understand classes we'll have to take a slightly deeper look at how programming languages really work.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#3b3c45",
            }
        },
        {
            id: '672c6cb0',
            title: "The Factory Pattern",
            description:  `A factory class, is like a production line that creates new instances of a particular type of object. 
                Once you get the hang of it this is one of the easiest design patterns that you will use frequently in your code.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#3b3c45",
            },
        },
        {
            id: '6cfd4a41',
            title: "The Decorator Pattern",
            description:  `Decorators are all about extending the behaviour of an object at the very last minute.
                So just as it is used it gains new powers. It's a pretty pwerful technique for many use cases.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#3b3c45",
            }
        },
        {
            id: '555e44f9',
            title: "Strategies and Adapters",
            description:  `The strategy pattern is often used in situations where you could perform a task in more than one way.
                It's all about picking the most appropriate strategy.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#3b3c45",
            },
        },
        {
            id: '56ec3e62',
            title: "SOLID principles",
            description:  `The SOLID principles are at the heart of Object-Oriented programming. It may take a little while
                for them to sink in, but once you've got them they will underpin every line of code you write.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#3b3c45",
            },
        },
        {
            id: '22e95199',
            title: "The Observer Pattern",
            description:  `How do you persuade a class to wait and listen out for a particular event and then act on it? 
                Observers are a very powerful technique that are often used by professional coders.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#3b3c45",
            },
        },
        {
            id: '9143a84b',
            title: "The chain of responsibility",
            description:  `In this level we'll discuss some advanced techniques for chaining classes together and 
                passing responsibility down the chain.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#3b3c45",
            },
        },
        {
            id: '7a8a1cc5',
            title: "Composition vs inheritance",
            description:  `In the final level we'll take a step back to discuss the bigger picture for design patterns
                and their usage. We'll look at some more real world use cases and some important concepts.`,
            icon: {
                img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
                background: "#3b3c45",
            }
        },
    ]
}