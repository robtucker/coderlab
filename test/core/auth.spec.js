import {db, cache} from "../../src/core";
import { mock } from "../mock";

describe.only('Auth', function() {

    describe('set user data', function() {

        let user = mock.user();

        it('should set the auth user data', function() {
            
            //console.log(user);
            let res = cache.set('user', user);
            //console.log(res);
        })

        it('should retrieve the auth user data', function() {
            let cached = cache._getUserFromCache();

            //console.log(cached);
        })
    })
})