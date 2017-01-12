/*

Level 1
HTML tags
Headings
Lists
HTML links
Create a Link
Link to HOB
Site Menu
Site Wide Links
*/
export default [
    {
        id: 1, // 1.1
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
                            textNode: 'Hello'
                        },
                        hint: `Go to the index.html file and change the word "Welcome" to "Hello".`
                    },

                ] 
            }
        ]
    },
    {
        id: 2, // 1.2 - h1, h2 and p tags
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

Jean-Claude started his first restaurant at the age of 6, serving toasted noodle sandwiches to his classmates. At the age of 16 his father bought him a food truck and he proceeded to make a reputation for himself serving spicy cornflakes in a bun. Today he has 3 michelin stars and commands the respect of the culinary world.

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
                            textNode: "The Incredible World of Jean-Claude Frites",
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
                            textNode: "Allow Jean-Claude to take you on a gastronomic journey"
                        },
                    }
                ] 
            },
            {
                id: 3,
                description: `The description (<%location%>) is clearly a paragraph of text, and so should be wrapped inside a <p> tag`,
                rules: [
                    {
                        id: 1,
                        fileId: '1dfu7sh3',
                        method: 'hasElem',
                        args: {
                            tagName: 'p',
                            textNode: "Jean-Claude started his first"
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
                            textNode: "Bookings"
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
                            textNode: "To book a table please"
                        }
                    }
                ] 
            }
        ]
    },
    {
        id: 3,
        type: "web",
        video: "https://www.youtube.com/embed/v4oN4DuR7YU",
        title: "Lists, lists, lists",
        description: `<p>Jean-Claude has sent over a list of dishes he wants on the menu, and a list of opening times. Time to mark them up!</p> `,
        files: [
            {
                id: 'j93mf8fh2',
                mode: 'htmlmixed',
                label: "index.html",
                contents: 
`<h2>Menu</h2>
<h3>Starters</h3>
<ul>
<li>Grilled lettuce with popcorn</li>
<li>Pan fried biscuits with mashed apple cores</li>
<li>Boiled orange juice with cloves</li>
</ul>

<h3>Main Courses</h3>


<ul>
  <li>Sauteed dumplings, plucked fennel, and jus de fromage</li>
  <li>Bay leaves cooked in red wine with a steak puree</li>
  Grated avocado with spaghetti cake
</ul>




<h3>Deserts</h3>
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
                            textNode: 'Menu'
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
                            textNode: 'Starters'
                        },
                    },
                    {
                        id: 2,
                        fileId: 'j93mf8fh2',
                        method: 'hasElem',
                        args: {
                            tagName: 'h3',
                            textNode: 'Main Courses'
                        },
                    },
                    {
                        id: 3,
                        fileId: 'j93mf8fh2',
                        method: 'hasElem',
                        args: {
                            tagName: 'h3',
                            textNode: 'Deserts'
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
                                textNode: 'Starters'
                            },
                            children: [
                                {
                                    tagName: 'li',
                                    textNode: "Grilled lettuce with popcorn"
                                },
                                {
                                    tagName: 'li',
                                    textNode: "Pan fried biscuits with mashed apple cores"
                                },
                                {
                                    tagName: 'li',
                                    textNode: "Boiled orange juice with cloves"
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
                                textNode: 'Main Courses'
                            },
                            children: [
                                {
                                    tagName: 'li',
                                    textNode: "Sauteed dumplings, plucked fennel, and jus de fromage"
                                },
                                {
                                    tagName: 'li',
                                    textNode: "Bay leaves cooked in red wine with a steak puree"
                                },
                                {
                                    tagName: 'li',
                                    textNode: "Grated avocado with spaghetti cake"
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
                                textNode: 'Deserts'
                            },
                            children: [
                                {
                                    tagName: 'li',
                                    textNode: "Chocolate risotto with candied mushrooms"
                                },
                                {
                                    tagName: 'li',
                                    textNode: "A bed of meringue garnished with sliced ginger"
                                },
                                {
                                    tagName: 'li',
                                    textNode: "Clotted cream with bolognase sauce"
                                }
                            ]
                        },
                    }
                ] 
            }
        ]
    },
    {
        id: 4,
        type: "web",
        video: "https://www.youtube.com/embed/v4oN4DuR7YU",
        title: "Ordered lists",
        label: "Ordered Lists",
        description: `<p>Jean-Claude has sent over a list of dishes he wants on the menu, and a list of opening times. Time to mark them up!</p> `,
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
                description: `The menu subtitle (<%location%>) is the same as the other subtitles so lets put it inside an h2 tag`,
                rules: [
                    {
                        id: 1,
                        fileId: 'p5otks8w',
                        method: 'hasElem',
                        args: {
                            tagName: 'h2',
                            textNode: 'Opening Times'
                        },
                    },
                ] 
            },
        ]
    },
];



