import { utils} from "../../src/core/utils";
import { expect } from "chai";

describe('shortKey', function() {

    it('should generate an 8 char uuid', function(){
        let key = utils.shortKey();

        expect(key).to.be.a('string');
        expect(key.length).to.equal(8);
    })
})