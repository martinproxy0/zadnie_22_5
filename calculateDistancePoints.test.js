const assert = require('assert');

const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    it('should return points', () => {

        const actual = calculateDistancePoints(23);

        const expected = '1';

        assert.equal(actual, expected);
    });
});