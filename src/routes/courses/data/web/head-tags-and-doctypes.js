/*
DOCTYPES and head tags
Separating CSS into a different file
link attribute
*/
export default {
    id: 'a2abb898',
    title: "Loading CSS files into html",
    description: `Learning how to keep your code neat and tidy is crucial as your website grows. In this chapter
        we'll discuss using separate files, and how different files are loaded in HTML.`,
    icon: {
        img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
        background: "#c75c5c",
    },
    challenges: [{
        id: 'cd5a0660',
        type: "web",
        video: "https://www.youtube.com/embed/v4oN4DuR7YU",
        title: "Wrapping it up",
        label: "Doctypes",
        description: `<p>You're taking a last look over your HTML before we send it off to Jean-Claude.</p>`,
        files: [
            {
                id: 'nE45iRup',
                mode: 'htmlmixed',
                label: "index.html",
                contents:
    `
    <h1>The Incredible World of Jean-Claude Frites</h1>

    <h2>Allow Jean-Claude to take you on a gastronomic journey that defies all logic</h2>

    <h3>About Jean-Claude</h3>

    <p>Jean-Claude started his first restaurant at the age of 6, serving toasted noodle sandwiches to his classmates. By the age of 21 he'd saved up enough money to buy a food truck where he served spicy cornflakes in a bun. Today he has 3 michelin stars and commands the respect of the culinary world.</p>

    <h3>Bookings</h3>

    <p>To book a table please email bookings@jeanclaudefrites.com. The waiting time is usually 3 months.</p>
    `
            },          
        ],
        tasks: [
            {
                id: 1,
                description: `At the top of the page add a <!DOCTYPE html> tag to specify that this file is html`,
                rules: [
                    {
                        id: 1,
                        fileId: 'nE45iRup',
                        method: 'hasElem',
                        args: {
                            type: 'h1',
                            data: '',
                            tagName: '!doctype'
                        },
                    },
                ] 
            },
        ]
    }]
}