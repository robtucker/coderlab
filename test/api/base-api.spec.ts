import * as mocha from "mocha";
import { BaseApi } from "../../src/common/api/base-api";
import * as Faker from "faker";

let api = new BaseApi();
api._entity = 'entity';

describe('Base Api', function() {


    describe('create action type', function() {

        it('should create a type from a method entity and endpoint', function() {

            let param = Faker.random.uuid();
            let actionName = api._createActionType('METHOD', 'foo/:baz');

            expect(actionName).to.equal('API_METHOD_ENTITY_FOO')
        });

        it('should not include variable parameters in the action', function() {

            let param = Faker.random.uuid();
            let actionName = api._createActionType('METHOD', ':dont/include/:random/:jibberish/words');

            expect(actionName).to.equal('API_METHOD_ENTITY_INCLUDE_WORDS');

        });



    })
})