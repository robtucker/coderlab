CoderLab is an open source project to allow anyone to learn programming for free. 
Each course consists of both videos and challenges, with an emphasis on challenges.

CoderLab are actively seeking developers to create course content.

If you wish to create a course you just need to have some videos prepared and put a bit of time into 
configuring the rules for the challenges.

###Installation

```
npm install
npm start
```

###Code editor

The code editor is built on top of [CodeMirror](https://codemirror.net)

### Course format

Each course consists of a series of levels. The format is as follows:

1. level => a level consits of a video followed by a series of challenges
2. challenge => each challenge consists of an optional video followed by a series of tasks
3. task =>  each task is a small action for the user to take e.g. writing a function. Each task contains a series of rules.
4. rules => rules are assertions that are made against the user's code, such as cheking for the presence of a variable or an html tag, or ensuring the output contains x or y.

Each challenge is a React component, so you could create a completely custom challenge format if you want to do something new.  

### Web challenge configuration 

Currently only web challenges (html/css/javascript) are offered. Each challenge takes a cofiguration object such as: 

```
{
    id: 2, // order is determined by array index not this id
    type: "web", // specifies that this is a web challenge
    video: "https://www.youtube.com/embed/v4oN4DuR7YU", // the video will be loaded before the challenge, can also be falsey
    title: "A long title...", // long title as displayed on the challenge page
    label: "Short Title", // short title as displayed in navigation components around the site
    autosubmit: false, // should the challenge be resubmitted on every key change
    description: `<p>do something</p>`, // descriptions can include markup so be careful
    files: [
        {
            id: '1dfu7sh3', // very important that each file has a unique id
            mode: 'htmlmixed', // the mode as specified by codemirror.net
            label: "index.html", // the file name as it appears to the student
            contents: `<h1>some file contents</h1>` // initialize the file with some contents
        }
    ],
    tasks: [ // each task should involve a single action for the student to do next
        {
            id: 1, // order is determined by id
            description: `Find the <h1> tag on <%location%> and change it to foo`, // certain embedded functions such as location can be used to augment the description
            rules: [ // the rules determine whether the student has done the task correctly
                {
                    id: 1,
                    fileId: '1dfu7sh3', // a parser will be generated for this file type
                    method: 'hasTag', // this method must exist on the parser class - can also be custom function
                    args: { // the args property will be passed to the method
                        tagName: 'h1', //
                        text: "foo",
                    },
                    hint: "Custom hint" // if a custom hint is provided it will override the default hint (don't do this!). 
                }
            ] 
        }
    ]
},
```

Notice that the task description uses <%location%> to specify the location of the task.
This is because the user might move code around, therefore all line numbers are changeable and need to be calculated on the fly.
For this reason it is also better to use the default hints which have line numbers built in, rather than providing a custom hint.








