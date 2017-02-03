
/**
 * anchor tags
 * href attribute
 * http requests
 * HTML links
 * relative links
 */

export default {
    id: 'c468be84',
    title: "Hypertext References",
    description: `In this level we'll discuss how information flows around the web and HTTP really means.
        You'll get a solid understanding of how the web works, and how to create links to other pages.`,
    icon: {
        img: require('../../../../assets/img/courses/javascript/icons/node.svg'),
        background: "#3b3c45",
    },
    challenges: [{
        id: '89115a2b',
        type: "web",
        video: "https://www.youtube.com/embed/v4oN4DuR7YU",
        title: "Hypertext References",
        label: "Hypertext References",
        description: `<p>Below we've provided three links for you. They don't look very nice though and when you click on them nothing happens!</p>`,
        files: [
            {
                id: 'b4RD8sk1',
                mode: 'htmlmixed',
                label: "index.html",
                contents: 
`
<h3>A list of links you might find useful now you're a programmer</h3>

<ul>
<li>
    http://www.w3schools.com/
</li>

<li>
    http://stackoverflow.com/
</li>

<li>
    https://developer.mozilla.org/en-US/docs/Web/HTML
</li>
</ul>
`
            },          
        ],
        tasks: [
            {
                id: 1,
                description: `Wrap the first link in an anchor tag. The url should be used as the href. Give the tag some text, such as "Google"`,
                rules: [
                    {
                        id: 1,
                        fileId: 'b4RD8sk1',
                        method: 'hasElem',
                        args: {
                            tagName: 'a',
                            attrs: [['href', '===', 'http://google.com']],
                            textNode: {opr: 'exists'}
                        },
                    },
                ] 
            },
            {
                id: 2,
                description: `Great! The next link is a link to stackoverflow. It's a great place to get advice about programming. Put it inside an anchor tag and give it some text`,
                rules: [
                    {
                        id: 1,
                        fileId: 'b4RD8sk1',
                        method: 'hasElem',
                        args: {
                            tagName: 'a',
                            attrs: [['href', '===', 'http://stackoverflow.com/']],
                            textNode: {opr: 'exists'}
                        },
                    },
                ] 
            },
            {
                id: 3,
                description: `The final link is to the Mozilla Developer Network, who write programming manuals. Even professional programmers consult manuals when they write code! You know what to do...`,
                rules: [
                    {
                        id: 1,
                        fileId: 'b4RD8sk1',
                        method: 'hasElem',
                        args: {
                            tagName: 'a',
                            attrs: [['href', '===', 'https://developer.mozilla.org/en-US/docs/Web/HTML']],
                            textNode: {opr: 'exists'}
                        },
                    },
                ] 
            }
        ]
    },
    {
        id: '7531689c',
        type: "web",
        video: "https://www.youtube.com/embed/v4oN4DuR7YU",
        title: "Relative links",
        label: "Relative links",
        description: `<p>Jean Claude has asked us to add a footer to the site. He's given us a list of other pages that the user might want to visit.</p>
        <p>When the user clicks on the text we want to redirect them to the other page using <i>relative</i> links</p>`,
        files: [
            {
                id: 'KoPU857f',
                mode: 'htmlmixed',
                label: "index.html",
                contents: 
`
<h3>Footer</h3>

<ul>
<li>
    About
</li>

<li>
    Contact
</li>

<li>
    Events
</li>
</ul>

`
            },          
        ],
        tasks: [
            {
                id: 1,
                description: `Add an anchor tag to make the "About" link work. When the user clicks on it they should be redirected to the '/about' url.`,
                rules: [
                    {
                        id: 1,
                        fileId: 'KoPU857f',
                        method: 'hasElem',
                        args: {
                            tagName: 'a',
                            attrs: [['href', '===', '/about']],
                            textNode: {val: 'About'}
                        },
                    },
                ] 
            },
            {
                id: 3,
                description: `Great! Next let's do the "Contact" link. It should link to the '/contact' page.`,
                rules: [
                    {
                        id: 1,
                        fileId: 'KoPU857f',
                        method: 'hasElem',
                        args: {
                            tagName: 'a',
                            attrs: [['href', '===', '/contact']],
                            textNode: {val: 'Contact'}
                        },
                    },
                ] 
            },
            {
                id: 2,
                description: `And finally let's make the word "Events" link to the '/events' page.`,
                rules: [
                    {
                        id: 1,
                        fileId: 'KoPU857f',
                        method: 'hasElem',
                        args: {
                            tagName: 'a',
                            attrs: [['href', '===', '/events']],
                            textNode: {val: 'Events'}
                        },
                    },
                ] 
            },
        ]
    }]
};



