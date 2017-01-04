export default [
    {
        id: 1,
        type: "web",
        video: "https://www.youtube.com/embed/v4oN4DuR7YU",
        title: "Welcome to HTML!",
        autosubmit: false,
        description: `You've been hired to create a webpage for top chef, Jean-Claude Frites. 
            Jean-Claude has sent us a word doc with some text in it. It's time to turn this text into dazzling html. `,
        files: {
            index: {
                id: 1,
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
            <h1 id="lead" class="margin-bottom-md">Welcome...</h1>

            <h2 class="margin-bottom-md">to the amazing world of web design</h2>

            <button>Continue</button>
        </div>
    </body>
</html>
`
            },          
            styles: {
                id: 1,
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
            },
            scripts: {
                id: 1,
                mode: 'javascript',
                label: "scripts.js",
                contents:
`document.addEventListener('DOMContentLoaded', () => {
    let lead = document.getElementById('lead');
    lead.innerHTML = lead.innerHTML.toUpperCase()
});
`
            },
        },
        tasks: [
            {
                id: 1,
                title: "Create an html tag",
                description: `To begin writing in html, first of all we need to create an HTML tag. 
                    We've opened the html tag for you. On the next line close the HTML tag.`,
                rules: [
                    {
                        fileName: 'index',
                        method: 'hasTag',
                        args: {
                            name: 'foo'
                        },
                        hint: "The file must have a valid html tag"
                    },

                ] 
            }
        ]
    }
];


