export default [
    {
        id: 1,
        video: "https://www.youtube.com/embed/v4oN4DuR7YU",
        title: "Welcome to HTML!",
        description: `You've been hired to create a webpage for top chef, Jean-Claude Frites. 
            Jean-Claude has sent us a word doc with some text in it. It's time to turn this text into dazzling html. `,
        files: {
            index: {
                id: 1,
                mode: 'htmlmixed',
                label: "index.html",
                contents: 
`
<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>
        <h1>Welcom to the Amazing World of Web Design</h1>

        <h2>Together we're going to learn how to design and build web pages</h2>

        <button>Continue</button>
    </body>
</html>
`
            },          
            styles: {
                id: 1,
                mode: 'css',
                label: "styles.css",
                contents:
`
html {
    background-image: url('https://unsplash.com/?photo=yLI-7XX5F-4') 
}

.header {
    backgroun
}
`
            },
            scripts: {
                id: 1,
                mode: 'javascript',
                label: "scripts.js",
                contents:
`
import React, { Component } from 'react';
import { merge } from "lodash";
import { CodeEditor } from "./code-editor";
import RaisedButton from 'material-ui/RaisedButton';

export class Editor extends Component {

    constructor(props) {
        super(props);
        //this.state = this.initFileContents();
    }

    componentWillMount() {
        console.log('mounting code editor');
        console.log(this.props);
    }

    showHeader() {
        let res = [];

        for (var f in this.props.files) {
            res.push('foo');
        }
        
        return res;
    }

    showVisibleFile() {
        let name = this.props.visibleFile;

        //console.log('finding visible file', this.props.visibleFile);
        if(!this.props.files || !this.props.files[name]) {
            return null;
        }

        let file = this.props.files[name];
        //console.log('file has been found', file)

        if(!file.mode) {
            throw new Error('A file must specify a valid mode');
        }
        return file;
    }
    
    render() {
        return "yo";
    }
};
`
            },
        },
        tasks: [
            {
                id: 1,
                title: "Create an html tag",
                description: `To begin writing in html, first of all we need to create an HTML tag. 
                    We've opened the html tag for you. On the next line close the HTML tag.`,
                parser: function (data) {
                    console.log('parsing data', data);
                }
            },
            {
                id: 2,
                title: "Create an html tag",
                description: `To begin writing in html, first of all we need to create an HTML tag. 
                    We've opened the html tag for you. On the next line close the HTML tag.`,
                parser: function (data) {
                    console.log('parsing data', data);
                }
            }
        ]
    },
    {
        id: 2,
        video: "https://www.youtube.com/embed/v4oN4DuR7YU",
        title: "Welcome to HTML!",
        description: `You've been hired to create a webpage for top chef, Jean-Claude Frites. 
            Jean-Claude has sent us a word doc with some text in it. It's time to turn this text into dazzling html. `,
        files: {
            index: {
                id: 1,
                mode: 'htmlmixed',
                label: "index.html",
                contents: "foo bar baz"
            },
        },
        tasks: [
            {
                id: 1,
                title: "Create an html tag",
                description: `To begin writing in html, first of all we need to create an HTML tag. 
                    We've opened the html tag for you. On the next line close the HTML tag.`,
                parser: function (data) {
                    console.log('parsing data', data);
                }
            },
            {
                id: 2,
                title: "Create an html tag",
                description: `To begin writing in html, first of all we need to create an HTML tag. 
                    We've opened the html tag for you. On the next line close the HTML tag.`,
                parser: function (data) {
                    console.log('parsing data', data);
                }
            }
        ]
    },
    
]


