const assert = require('assert');

const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
  describe('wrong parameter', () => {
    it('should return null for empty parameter', () => {

      const actual = calculateTotalPoints();

      const expected = null;

      assert.equal(actual, expected);
    });
    it('should return null when call calculateDistancePoints returned null', () => {

      const actual = calculateTotalPoints('', '', '', [18.5, 18.5, 18.5, 18.0, 18.5], 8.7, -8.9);

      const expected = null;

      assert.equal(actual, expected);
    });
    it('should return null when call caltulateStylePoint returned null', () => {

      const actual = calculateTotalPoints(226.0, 'mammoth', 200, [], 8.7, -8.9);

      const expected = null;

      assert.equal(actual, expected);
    });
    it('should return null when the windFactor is NAN', () => {

      const actual = calculateTotalPoints(226.0, 'mammoth', 200, [18.5, 18.5, 18.5, 18.0, 18.5], 'abc', -8.9);

      const expected = null;

      assert.equal(actual, expected);
    });
    it('should return null when the gateFactor is NAN', () => {

      const actual = calculateTotalPoints(226.0, 'mammoth', 200, [18.5, 18.5, 18.5, 18.0, 18.5], 8.7, 'abc');

      const expected = null;

      assert.equal(actual, expected);
    });
  });
  describe('correct parameter Planica', () => {
    it('should return calculated points Unofficial Results 1st Round (rank 1)', () => {

      const actual = calculateTotalPoints(227.5, 'mammoth', 200, [18.0, 18.5, 17.5, 18.5, 18.5], 8.7, -8.4);

      const expected = 208.3;

      assert.equal(actual, expected);
    });
    it('should return calculated points Unofficial Results 1st Round (rank 2)', () => {

      const actual = calculateTotalPoints(226.0, 'mammoth', 200, [18.5, 18.5, 18.5, 18.0, 18.5], 8.7, -8.9);

      const expected = 206.5;

      assert.equal(actual, expected);
    });
  });
  describe('correct parameter Pjongjang', () => {
    it('should return calculated points Intermediate Results (rank 1)', () => {

      const actual = calculateTotalPoints(111.0, 'normal', 98, [19.0, 19.5, 19.0, 19.0, 19.0], 3.2, -14.4);

      const expected = 131.8;

      assert.equal(actual, expected);
    });
    it('should return calculated points Intermediate Results (rank 2)', () => {

      const actual = calculateTotalPoints(106.5, 'normal', 98, [18.5, 18.5, 18.5, 19.0, 19.0], 6.4, -13.5);

      const expected = 125.9;

      assert.equal(actual, expected);
    });
  });
  describe('correct parameter Zakopanem', () => {
    it('should return calculated points Large Hill Individual Official Results (rank 1 / Round Rank 1)', () => {

      const actual = calculateTotalPoints(134.0, 'big', 120, [19.0, 20.0, 19.5, 19.0, 18.5], 0, -5.4);

      const expected = 137.3;

      assert.equal(actual, expected);
    });
    it('should return calculated points Large Hill Individual Official Results (rank 2 / Round Rank 1)', () => {

      const actual = calculateTotalPoints(133.0, 'big', 120, [18.5, 18.5, 19.0, 19.0, 19.0], 0, -5.1);

      const expected = 134.8;

      assert.equal(actual, expected);
    });
  });
});