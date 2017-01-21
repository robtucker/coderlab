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

export const getCourseLevel = (courseName, levelIndex) => {
    let course = require("./" + courseName + "/index.js");
    // console.log('getCourseLevel', courseName, levelIndex, course);
    return require.ensure([], (require) => {
        let level = require('./' + courseName + "/" + course.courseMap[levelIndex]);
        if (level && level.default) {
            course.summary.levels[levelIndex] = level.default;
            //console.log('course with level', course.summary);
            return course.summary;
        }
    });
}
