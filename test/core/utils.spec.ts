import { utils} from "../../src/common/core/utils";
import { assert, expect } from "chai";

describe('shortKey', function() {

    it('should generate an 8 char uuid', function(){
        let key = utils.shortKey();

        expect(key).to.be.a('string');
        expect(key.length).to.equal(8);
    })
})

describe.only('deepMergeArrayConcat', function() {

    it('should merge objs and concat arrays', function() {


        let first = {
            abc: {
                upperConst: 'toastie',
                levels: {
                    lowerConstant: 'jam',
                    xyz: {
                        firstOnly: 'firstObjOnly',
                        challenges: {
                            foo: {dateStarted: [1234]}
                        }
                    },
                    lmn: {
                        challenges: {
                            foo: {dateStarted: [5678]}
                        }
                    }
                }
            }
        }

        let second = {
            abc: {
                upperConst: 'sandwich',
                levels: {
                    lowerConstant: 'cheese',
                    xyz: {
                        challenges: {
                            foo: {dateStarted: [9101112]}
                        }
                    },
                    lmn: {
                        secondOnly: 'secObjOnly',
                        challenges: {
                            foo: {dateStarted: [13141516]}
                        }
                    }
                }
            }
        }

        let expected = {
            abc: {
                upperConst: 'sandwich',
                levels: {
                    lowerConstant: 'cheese',
                    xyz: {
                        firstOnly: 'firstObjOnly',
                        challenges: {
                            foo: {dateStarted: [1234, 9101112]}
                        }
                    },
                    lmn: {
                        secondOnly: 'secObjOnly',
                        challenges: {
                            foo: {dateStarted: [5678, 13141516]}
                        }
                    }
                }
            }
        }
        let res = utils.deepMergeArrayConcat(first, second);

        console.log(JSON.stringify(res));

        assert.deepEqual(res, expected);
    });

})