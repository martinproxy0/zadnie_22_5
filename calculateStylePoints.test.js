const assert = require('assert');

const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('wrong parameter', () => {
        it('should return null for empty parameter', () => {

            const actual = calculateStylePoints();

            const expected = null;

            assert.equal(actual, expected);
        });
        it('should return null for not an array', () => {

            const actual = calculateStylePoints(23);

            const expected = null;

            assert.equal(actual, expected);
        });
        it('should return null for lenght less than 5 item', () => {

            const actual = calculateStylePoints([1,4,5.5]);

            const expected = null;

            assert.equal(actual, expected);
        });
        it('should return null for not number item', () => {

            const actual = calculateStylePoints([1,4,5.5,'asdasd',14]);

            const expected = null;

            assert.equal(actual, expected);
        });
        it('should return null for over treshold value', () => {

            const actual = calculateStylePoints([1,1,5,6,141231]);

            const expected = null;

            assert.equal(actual, expected);
        });
        it('should return null for below treshold value', () => {

            const actual = calculateStylePoints([1,-20,5,6,8]);

            const expected = null;

            assert.equal(actual, expected);
        });
    });
    describe('correct parameter', () => {
        it('should return calculated points', () => {

            const actual = calculateStylePoints([1,0,5.7,6,8]);

            const expected = 12.7;

            assert.equal(actual, expected);
        });
    });
});
