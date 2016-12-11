export * from "./courses.routes";
export * from "./components/course-index";

import web from "./data/web";
import game from "./data/game";
import javascript from "./data/javascript";
import python from "./data/python";
import teacher from "./data/teacher";
import advanced from "./data/advanced";

export const coursesData = [web, game, javascript, python, teacher, advanced];