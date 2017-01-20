import config from "../../../config";

import * as web from "./web";
import * as game from "./game";
import * as javascript from "./javascript";
import * as python from "./python";
import * as machineLearning from "./machine-learning";
import * as oop from "./oop";

let courses = {
    web,
    game,
    javascript,
    python,
    machineLearning,
    oop,
};

export const getSummaries = () => ({
    web: web.summary,
    game: game.summary,
    javascript: javascript.summary,
    python: python.summary,
    machineLearning: machineLearning.summary,
    oop: oop.summary
})

export const getCourse = (courseName) => {
    return require.ensure([], (require) => {
        let course = require("./" + courseName + "/index.js");
        if(course && course.summary) return course.summary;
    });
}

export const getCourseLevel = (courseName, levelId) => {
    let course = require("./" + courseName + "/index.js");
    let courseMap = course.courseMap;
    // console.log('getCourseLevel', courseName, levelId, courseMap);
    return require.ensure([], (require) => {
        //console.log('level index', courseMap[parseInt(levelId) - 1])
        let level = require('./' + courseName + "/" + courseMap[parseInt(levelId) - 1]);
        //console.log('getLevel', level);
        if (level && level.default) return level.default
    });
}
