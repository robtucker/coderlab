/*

Level 1
HTML tags
Headings
Lists

*/
export default {
    id: 'a1258ac0',
    title: "Introduction to html",
    description:  `Learn professional web development using HTML, CSS and SASS. 
        Kick start your career as a programmer with this practical hands-on course.`,
    icon: {
        img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
        background: "#3b3c45",
    },
    challenges: [{

        id: 'd8edd730',
        type: "web",
        video: "https://www.youtube.com/embed/v4oN4DuR7YU",
        title: "Welcome to Web Design!",
        description: `<p>During this course you're going to learn how to design and build websites.</p>
    <p>On the right you'll see an HTML editor with 2 different files in it. This is your new home.</p>
    <p>Try clicking on each file in turn and reading through some of the code. We're going to teach you 
    how to write code just like this.</p>
    <p>Underneath the editor is a display section, which displays the output from
    your code. In order to update the display you need to click the "Run code" button</p>
    `,
        files: [
            {
                id: '2rfvu5re',
                mode: 'htmlmixed',
                label: "index.html",
                contents: 
`<!DOCTYPE html>
<html>
<head>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
</head>
<body id="img-container">
    <div class="flex-container overlay">
        <h1 id="lead" class="margin-bottom-md">Welcome</h1>

        <h2 class="margin-bottom-md">to the amazing world of web design</h2>

        <button>Continue</button>
    </div>
</body>
</html>
`
            },          
            {
                id: '78hda8r7',
                mode: 'css',
                label: "styles.css",
                contents:
`html, body, #img-container {
height: 100%;
color: white;
text-align: center;
margin: 0px;
font-family: 'Roboto', sans-serif;
}

h1 {
margin-top: 0px;
}

.margin-bottom-md {
margin-top: 0px;
margin-bottom: 24px;
}

#img-container {
background-image: url("https://s3.amazonaws.com/s3.imagefinder.co/uploads/2016/01/05005508/unsplash-com-photo-1439853885754-b0fc182c360f.jpg");
background-size: cover;
background-position: center;
background-repeat: no-repeat;
}

.flex-container {
display: -webkit-flex; /* Safari */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.overlay {
height: 100%;
width: 100%;
background-color: rgba(0, 0, 0, 0.2);
}

button {
color: white;
background-color: #2196f3;
border: none;
padding: 10px 25px;
font-size: 14px;
cursor: pointer;
}

button:hover {
background-color: #42a5f5;
}
`
            }
        ],
        tasks: [
            {
                id: 1,
                description: `In the index.html file, find the word "Welcome" and change it to the word "Hello".
                    Then click the submit button. Notice how the display underneath is updated?`,
                rules: [
                    {
                        id: 1,
                        fileId: '2rfvu5re',
                        method: 'hasElem',
                        args: {
                            tagName: 'h1',
                            textNode: {val: 'Hello'}
                        },
                        hint: `Go to the index.html file and change the word "Welcome" to "Hello".`
                    },

                ] 
            }
        ]
    },
    {
        id: '977ecf49', // 1.2 - h1, h2 and p tags
        type: "web",
        video: "https://www.youtube.com/embed/v4oN4DuR7YU",
        title: "Your first job...",
        label: "Intro to tags",
        autosubmit: false,
        description: `<p>You've been hired to create a webpage for top chef, Jean-Claude Frites.</p>
            <p>Jean-Claude has sent us a document with some text in it which we've copied into the index.html file.
            Unfortunately it's coming out as a jumbled up mess.</p> 
            <p>It's time to turn this text into beautiful html.`,
        files: [
            {
                id: '1dfu7sh3',
                mode: 'htmlmixed',
                label: "index.html",
                contents: 
`The Incredible World of Jean-Claude Frites

Allow Jean-Claude to take you on a gastronomic journey that defies all logic

Jean-Claude started his first restaurant at the age of 6, serving toasted noodle sandwiches to his classmates. By the age of 21 he'd saved up enough money to buy a food truck where he served spicy cornflakes in a bun. Today he has 3 michelin stars and commands the respect of the culinary world.

Bookings

To book a table please email bookings@jeanclaudefrites.com. The waiting time is usually 3 months.
`
            }
        ],
        tasks: [
            {
                id: 1,
                description: `Find the title (<%location%>) and wrap it in an h1 tag. Remember to use a closing slash for the closing tag.`,
                rules: [
                    {
                        id: 1,
                        fileId: '1dfu7sh3',
                        method: 'hasElem',
                        args: {
                            tagName: 'h1',
                            textNode: {val: "The Incredible World of Jean-Claude Frites"},
                        },
                    }
                ] 
            },
            {
                id: 2,
                description: `The subtitle (<%location%>) isn't quite as important as the main header. Instead of an <h1> tag lets put it inside an <h2> tag`,
                rules: [
                    {
                        id: 2,
                        fileId: '1dfu7sh3',
                        method: 'hasElem',
                        args: {
                            tagName: 'h2',
                            textNode: {val: "Allow Jean-Claude to take you on a gastronomic journey"}
                        },
                    }
                ] 
            },
            {
                id: 3,
                description: `The description (<%location%>) is a paragraph of text, and so should be wrapped inside a <p> tag`,
                rules: [
                    {
                        id: 1,
                        fileId: '1dfu7sh3',
                        method: 'hasElem',
                        args: {
                            tagName: 'p',
                            textNode: {val: "Jean-Claude started his first"}
                        },
                    }

                ] 
            },
            {
                id: 4,
                description: `Great stuff! now we've reached the "Bookings" subtitle (<%location%>). What tag do you think it should have? Give it a go.`,
                rules: [
                    {
                        id: 1,
                        fileId: '1dfu7sh3',
                        method: 'hasElem',
                        args: {
                            tagName: 'h2',
                            textNode: {val: "Bookings"}
                        }
                    }
                ] 
            },
            {
                id: 5,
                description: `Underneath the bookings subtitle are some details on how to book a table. Looks like another paragraph to me! Wrap it in the correct tag.`,
                rules: [
                    {
                        id: 1,
                        fileId: '1dfu7sh3',
                        method: 'hasElem',
                        args: {
                            tagName: 'p',
                            textNode: {val: "To book a table please"}
                        }
                    }
                ] 
            }
        ]
    },
    {
        id: '3b967496',
        type: "web",
        video: "https://www.youtube.com/embed/v4oN4DuR7YU",
        title: "Lists, lists, lists",
        description: `<p>Jean-Claude has sent over a list of dishes he wants on the menu. Time to mark them up!</p> `,
        files: [
            {
                id: 'j93mf8fh2',
                mode: 'htmlmixed',
                label: "index.html",
                contents: 
`Menu

Starters

Grilled lettuce with popcorn
Pan fried biscuits with mashed apple
Boiled orange juice with cloves

Main Courses

Sauteed dumplings, plucked fennel, and jus de cabbage
Bay leaves cooked in red wine with a steak puree
Grated avocado with spaghetti cake

Deserts

Chocolate risotto with candied mushrooms
A bed of meringue garnished with sliced ginger
Clotted cream with bolognase sauce
`
            },          
        ],
        tasks: [
            {
                id: 1,
                description: `The menu subtitle (<%location%>) is the same as the other subtitles so lets put it inside an h2 tag`,
                rules: [
                    {
                        id: 1,
                        fileId: 'j93mf8fh2',
                        method: 'hasElem',
                        args: {
                            tagName: 'h2',
                            textNode: {val: 'Menu'}
                        },
                    },
                ] 
            },
            {
                id: 2,
                description: "Next we have to deal with the 3 subtitles - Starters, Main Courses and Deserts. These headers are less important than the Menu subtitle. What tag do you think is approproiate?",
                rules: [
                    {
                        id: 1,
                        fileId: 'j93mf8fh2',
                        method: 'hasElem',
                        args: {
                            tagName: 'h3',
                            textNode: {val: 'Starters'}
                        },
                    },
                    {
                        id: 2,
                        fileId: 'j93mf8fh2',
                        method: 'hasElem',
                        args: {
                            tagName: 'h3',
                            textNode: {val: 'Main Courses'}
                        },
                    },
                    {
                        id: 3,
                        fileId: 'j93mf8fh2',
                        method: 'hasElem',
                        args: {
                            tagName: 'h3',
                            textNode: {val: 'Deserts'}
                        },
                    },
                ]
            },
            {
                id: 3,
                description: "We need to put the starters into a list. The order of the list does not matter. Go ahead and create an unordered list for the starters.",
                rules: [
                    {
                        id: 1,
                        fileId: 'j93mf8fh2',
                        method: 'hasElem',
                        args: {
                            tagName: 'ul',
                            prevSibling: {
                                tagName: 'h3',
                                textNode: {val: 'Starters'}
                            },
                            children: [
                                {
                                    tagName: 'li',
                                    textNode: {val: "Grilled lettuce with popcorn"}
                                },
                                {
                                    tagName: 'li',
                                    textNode: {val: "Pan fried biscuits with mashed apple"}
                                },
                                {
                                    tagName: 'li',
                                    textNode: {val: "Boiled orange juice with cloves"}
                                }
                            ]
                        },
                    }
                ] 
            },
            {
                id: 4,
                description: "Great, now put the Main courses into an unordered list too.",
                rules: [
                    {
                        id: 1,
                        fileId: 'j93mf8fh2',
                        method: 'hasElem',
                        args: {
                            tagName: 'ul',
                            prevSibling: {
                                tagName: 'h3',
                                textNode: {val: 'Main Courses'}
                            },
                            children: [
                                {
                                    tagName: 'li',
                                    textNode: {val: "Sauteed dumplings, plucked fennel, and jus de cabbage"}
                                },
                                {
                                    tagName: 'li',
                                    textNode: {val: "Bay leaves cooked in red wine with a steak puree"}
                                },
                                {
                                    tagName: 'li',
                                    textNode: {val: "Grated avocado with spaghetti cake"}
                                }
                            ]
                        },
                    }
                ] 
            },
            {
                id: 5,
                description: "And finally... time for the deserts",
                rules: [
                    {
                        id: 1,
                        fileId: 'j93mf8fh2',
                        method: 'hasElem',
                        args: {
                            tagName: 'ul',
                            prevSibling: {
                                tagName: 'h3',
                                textNode: {val: 'Deserts'}
                            },
                            children: [
                                {
                                    tagName: 'li',
                                    textNode: {val: "Chocolate risotto with candied mushrooms"}
                                },
                                {
                                    tagName: 'li',
                                    textNode: {val: "A bed of meringue garnished with sliced ginger"}
                                },
                                {
                                    tagName: 'li',
                                    textNode: {val: "Clotted cream with bolognase sauce"}
                                }
                            ]
                        },
                    }
                ] 
            }
        ]
    },
    {
        id: 'd7047bd3',
        type: "web",
        video: "https://www.youtube.com/embed/v4oN4DuR7YU",
        title: "Ordered lists",
        label: "Ordered Lists",
        description: `<p>Jean-Claude has sent over a list of opening times. We need to put them into a list but obviously order is going to matter here.</p> `,
        files: [
            {
                id: 'p5otks8w',
                mode: 'htmlmixed',
                label: "index.html",
                contents: 
`Opening Times

Mon - 5pm to 10pm
Tues - 5pm to 10pm
Weds - 5pm to 10pm
Thurs - 5pm to 12pm
Fri - 5pm to 12pm
Sat - 10am to 12pm
Sun - 10am to 10pm
`
            },          
        ],
        tasks: [
            {
                id: 1,
                description: `To start off lets add an <h2> tag for the "Opening Times" subtitle (<%location%>)`,
                rules: [
                    {
                        id: 1,
                        fileId: 'p5otks8w',
                        method: 'hasElem',
                        args: {
                            tagName: 'h2',
                            textNode: {val: 'Opening Times'}
                        },
                    },
                ] 
            },
            {
                id: 2,
                description: `Now put the opening times into an ordered list`,
                rules: [
                    {
                        id: 1,
                        fileId: 'p5otks8w',
                        method: 'hasElem',
                        args: {
                            prevSibling: {
                                tagName: 'h2',
                                textNode: {val: 'Opening Times'}
                            },
                            tagName: 'ol',
                            children: [
                                {
                                    tagName: 'li',
                                    textNode: {val: 'Mon'}
                                },
                                {
                                    tagName: 'li',
                                    textNode: {val: 'Tues'}
                                },
                                {
                                    tagName: 'li',
                                    textNode: {val: 'Weds'}
                                },
                                {
                                    tagName: 'li',
                                    textNode: {val: 'Thurs'}
                                },
                                {
                                    tagName: 'li',
                                    textNode: {val: 'Fri'}
                                },
                                {
                                    tagName: 'li',
                                    textNode: {val: 'Sat'}
                                },
                                {
                                    tagName: 'li',
                                    textNode: {val: 'Sun'}
                                },
                            ]
                        },
                    },
                ] 
            },
        ]
    },
    {
        id: 'eec2787d',
        type: "web",
        video: "https://www.youtube.com/embed/v4oN4DuR7YU",
        title: "Wrapping it up",
        label: "Doctypes",
        description: `<p>You're taking a last look over your HTML before we send it off to Jean-Claude.</p>
        <p>Suddenly you notice that you forgot to add in the all-important html and body tags. That wouldn't be very professional at all. Time to fix it.</p> `,
        files: [
            {
                id: 'LPaSDa17',
                mode: 'htmlmixed',
                label: "index.html",
                contents: 
`
<h1>The Incredible World of Jean-Claude Frites</h1>

<h2>Allow Jean-Claude to take you on a gastronomic journey that defies all logic</h2>

<p>Jean-Claude started his first restaurant at the age of 6, serving toasted noodle sandwiches to his classmates. By the age of 21 he'd saved up enough money to buy a food truck where he served spicy cornflakes in a bun. Today he has 3 michelin stars and commands the respect of the culinary world.</p>

<h2>Menu</h2>

<h3>Starters</h3>

<ul>
<li>Grilled lettuce with popcorn</li>
<li>Pan fried biscuits with mashed apple</li>
<li>Boiled orange juice with cloves</li>
</ul>

<h3>Main Courses</h3>

<ul>
<li>Sauteed dumplings, plucked fennel, and jus de cabbage</li>
<li>Bay leaves cooked in red wine with a steak puree</li>
<li>Grated avocado with spaghetti cake</li>
</ul>

<h3>Deserts</h3>

<ul>
<li>Chocolate risotto with candied mushrooms</li>
<li>A bed of meringue garnished with sliced ginger</li>
<li>Clotted cream with bolognase sauce</li>
</ul>

<h2>Opening Times</h2>

<ol>
<li>Mon - 5pm to 10pm</li>
<li>Tues - 5pm to 10pm</li>
<li>Weds - 5pm to 10pm</li>
<li>Thurs - 5pm to 12pm</li>
<li>Fri - 5pm to 12pm</li>
<li>Sat - 10am to 12pm</li>
<li>Sun - 10am to 10pm</li>
</ol>

<h2>Bookings</h2>

<p>To book a table please email bookings@jeanclaudefrites.com. The waiting time is usually 3 months.</p>

<h3>Footer</h3>

<ul>
<li>
<a href="/about">About</a>
</li>

<li>
<a href="/contact">Contact</a>
</li>

<li>
<a href="/events">Events</a>
</li>
</ul>
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
                        fileId: 'LPaSDa17',
                        method: 'hasElem',
                        args: {
                            type: 'directive',
                            data: '!DOCTYPE html',
                            tagName: '!doctype'
                        },
                    },
                ] 
            },
            {
                id: 2,
                description: `Underneath the doctype, wrap the entire page in side an html tag`,
                rules: [
                    {
                        id: 1,
                        fileId: 'LPaSDa17',
                        method: 'hasElem',
                        args: {
                            prevSibling: {
                                type: 'directive',
                                data: '!DOCTYPE html',
                                tagName: '!doctype'
                            },
                            //todo - children: []
                            tagName: 'html',
                        },
                    },
                ] 
            },
            {
                id: 3,
                description: `Wrap the contents of the page in a body tag. The body tag should go inside the html tag`,
                rules: [
                    {
                        id: 1,
                        fileId: 'LPaSDa17',
                        method: 'hasElem',
                        args: {
                            parent: {
                                tagName: 'html'
                            },
                            //todo - children: []
                            tagName: 'body',
                        },
                    },
                ] 
            },
        ]
    }]
};



