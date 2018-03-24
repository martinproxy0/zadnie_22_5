const assert = require('assert');
const myFunc = require('./index');

describe('formatDate', () => {
    describe('seconds', () => {
        it('should return seconds', () => {
            const actual = formatDate(23);
    
            const expected = '23s';
    
            assert.equal(actual, expected);
        });
    }
}