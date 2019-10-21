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

};

export const errorMessages = {
    REQUIRED: 'Required',
    EMAIL_INVALID: 'Invalid email address',
    PASSWORD_CONFIRMATION_INVALID: "Must match the password field"

}


export const formConstants = {
    USERNAME_MIN_LENGTH: 5,
    PASSWORD_MIN_LENGTH: 6,

};
