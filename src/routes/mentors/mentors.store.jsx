let mentors = [
    {
        id: 1,
        name: "Rob Tucker",
        subtitle: "Python Developer",
        description: `Rob is a Python developer with a love for natural language processing, linguistics 
            and compiler design. He also plays piano and has a dog named Izzy.`,
        img: require('../../assets/img/mentors/rob-tucker.jpg'),
        tags: ["javascript", "python"]
    },
    {
        id: 2,
        name: "Ashley Banks",
        subtitle: "Javascript Developer",
        description: `Ashley is a veteran Javascript programmer with years of experience building 
            web applications using React, Angular and NodeJS.`,
        img: require('../../assets/img/mentors/ashley-banks.jpg'),
        tags: ["javascript", "python"]
    },
    {
        id: 3,
        name: "Aylin Cakiroglu",
        subtitle: "Machine Learning Specialist",
        description: `Aylin is a machine learning specialist who works on DNA sequencing. 
            She works for Cancer Research and is busy bringing Computer Science to Biology`,
        img: require('../../assets/img/mentors/aylin-cakiroglu.jpg'),
        tags: ["javascript", "python"]
    },
    {
        id: 4,
        name: "Simon Van Blerk",
        subtitle: "Web Developer",
        description: `Simon is a web developer with a focus on user-interfaces and design. 
            He's run various teams over the years and loves agile methodology.`,
        img: require('../../assets/img/mentors/simon-van-blerk.jpg'),
        tags: ["javascript", "python"]
    },
    {
        id: 5,
        name: "Roberto Nygaard",
        subtitle: "PHP Developer",
        description: `Roberto is a CTO with years of experience in PHP, Java and Database Design. 
            He's currently building a platform where developers can find jobs at Snap.hr`,
        img: require('../../assets/img/mentors/roberto-nygaard.jpg'),
        tags: ["javascript", "python"]
    }
]

export const mentorsReducer = (state = mentors, action) => {

    switch (action.type) {
    default:
        return state;
    }

};
