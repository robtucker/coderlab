import { s4 } from "../../src/core/utils";
import { expect } from "chai";

describe('s4', function() {

    it('should generate a 4 char uuid', function(){
        let key = s4();

        expect(key).to.be.a('string');
        expect(key.length).to.equal(4);
    })
})