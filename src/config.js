/**
 * re-export the config from webpack 
 */
const config = process.env.CONFIG;

export default config;

/**
 * list of database tables and their primary keys
 */
export const dbConfig = {
    auth: {
        options: {keyPath: 'id'},
    },
    user: {
        options: {keyPath: 'id'},
        indexes: [{indexName: "username", unique: true }]
    },
    courses: {
        options: {keyPath: 'id'},
        indexes: [{indexName: "name", unique: false }]
    }

}