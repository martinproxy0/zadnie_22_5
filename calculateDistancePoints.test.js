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

            const actual = calculateDistancePoints('','normal','');

            const expected = null;

            assert.equal(actual, expected);
        });
    });
    describe('hill size parameter', () => {
        it('should return null for other value than normal, big or mammoth', () => {

            const actual = calculateDistancePoints('','small','');

            const expected = null;

            assert.equal(actual, expected);
        });
    });
});