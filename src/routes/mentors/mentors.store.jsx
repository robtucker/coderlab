let mentors = [
    {
        id: 1,
        name: "Rob Tucker",
        subtitle: "Javascript Developer",
        description: `Rob has 8 years of experience building Javascript and Python applications using React, 
            Angular and Node, Django and Flask. He also plays piano and has a dog named Izzy`,
        img: require('../../assets/img/mentors/rob-tucker.jpg'),
        tags: ["javascript", "python"]
    },
    {
        id: 2,
        name: "Ashley Banks",
        subtitle: "Node Developer",
        description: `Ashley has 8 years of experience programming all sorts of weird and wonderful things, 
            He used to work in an agency but currently `,
        img: require('../../assets/img/mentors/ashley-banks.jpg'),
        tags: ["javascript", "python"]
    }
]

export const mentorsReducer = (state = mentors, action) => {

    switch (action.type) {
    default:
        return state;
    }

};
