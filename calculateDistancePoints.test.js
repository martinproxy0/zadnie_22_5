const assert = require('assert');

const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('wrong arguments lists', () => {
        it('should return null for zero or undefined arguments', () => {

            const actual = calculateDistancePoints();

            const expected = null;

            assert.equal(actual, expected);
        });
    });
    describe('distance parameter', () => {
        it('should return null for not number ', () => {

            const actual = calculateDistancePoints('', 'normal', '');

            const expected = null;

            assert.equal(actual, expected);
        });
        it('should return null for negative number ', () => {

            const actual = calculateDistancePoints(-100, 'normal', 90);

            const expected = null;

            assert.equal(actual, expected);
        });
    });
    describe('hill size parameter', () => {
        it('should return null for other value than normal, big or mammoth', () => {

            const actual = calculateDistancePoints('', 'small', '');

            const expected = null;

            assert.equal(actual, expected);
        });
    });
    describe('K point parameter', () => {
        it('should return null for not number ', () => {

            const actual = calculateDistancePoints(123, 'normal', '');

            const expected = null;

            assert.equal(actual, expected);
        });
        it('should return null for negative number ', () => {

            const actual = calculateDistancePoints(111.6, 'normal', -110);

            const expected = null;

            assert.equal(actual, expected);
        });
    });
    describe('correct parameter', () => {
        it('should return calculated points', () => {

            const actual = calculateDistancePoints(148.3,'big',120);

            const expected = 111.3;

            assert.equal(actual, expected);
        });
        it('should return calculated points Unofficial Results 1st Round', () => {

            const actual = calculateDistancePoints(226.0,'mammoth',200);

            const expected = 151.2;

            assert.equal(actual, expected);
        });
    });
});
