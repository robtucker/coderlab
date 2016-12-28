###Installation

```
npm install
npm start
```


### Course Configuration Objects

A course consists of a series of configuration objects each representing a single level:

- - level
- - - challenge
- - - - task
- - - - task
- - - challenge
- - - - task
- - - - task

The challenge is the basic unit of activity for self-leaning. A challenge must be configured with an object such as:

```
title.
description.
files: [],
tasks: []
```

The files are the seed files that the user must operate on. The tasks array is list of specific instructions 
directing the user what to do next. Each task contains a parser that is run against the file inputs to determine 
if the task was successfully completed or not. 

###Code editor

The code editor is built on top of [CodeMirror](https://codemirror.net)

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







