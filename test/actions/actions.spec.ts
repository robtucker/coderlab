import {
    getMe,
    putMe,
    userSettingsUpdated
} from "../../src/actions";

describe('User Actions', function() {

    it('getMe should return a promise', function(done) {
        let req = getMe();

        req.then(u => {

        });
        
    });

})