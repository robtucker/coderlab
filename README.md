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

### Course configuration
A course consists of a series of levels. Each level is an array of challenges. The format is:

course => level => challenge => task => rules

The rules are assertions that are made against the Abstract Syntax Tree of the code, such as
cheking for the presence of a variable or an html tag, or ensuring the output contains x or y.

Each challenge is a React component, so you could create a custom challenge format if you want to do something new.  
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


### API Usage

Each api class must deifne an _entity property such as 'user', which will be used to prefix the url.

```
import { BaseApi } from "../base-api";

export class UserApi extends BaseApi {
    _entity = "user";
}
```

Each api call accepts a url string and an object containing the url parameters.
The request body (or query params) should be supplied as the third parameter. eg:

```
import { UserApi } from "../api";

let api = new UserApi();

api.get('foo/:bar', {bar: 'robtucker'});
api.put(':id', {id: 123}, data);

```

All urls will automatically be prefixed with the entity type e.g. "user/foo/robtucker" or "user/123"

Redux actions will be automatically emitted during the lifecycle of the request.

The format for the action type is: API_{METHOD}_{ENTITY}_{ENDPOINT}_{STATUS}, 
where the status is either REQUEST, SUCCESS or ERROR.

For instance the 2 api calls above will emit the following actions:

```
API_GET_USER_FOO_BAR_REQUEST
API_GET_USER_FOO_BAR_SUCCESS
API_GET_USER_FOO_BAR_ERROR

API_PUT_USER_ID_REQUEST
API_PUT_USER_ID_SUCCESS
API_PUT_USER_ID_ERROR
```

Variable parameters will only be included inthe action type if they are not duplicated.
eg. the action type `API_GET_USER_USERNAME_USERNAME` contains the word username twice.
Each action type is therefore checked to make sure no duplicate words are positioned immediately next to each other.
Thus `api.get('/username/:username')` will will result in `API_GET_USER_USERNAME`

This system allows the redux action types to be predicatable without munderds of constants.
The action type is also used as the key for saving to local storage as well.







