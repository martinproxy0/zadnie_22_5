const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  if ((distance === undefined) ||
    (hillSize === undefined) ||
    (kPoint === undefined) ||
    (styleNotes === undefined) ||
    (windFactor === undefined) ||
    (gateFactor === undefined)) {
    return null;
  }
  
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);
  
  if ((distancePoints === null) || (stylePoints === null)) { return null };
  if ((!Number.isFinite(windFactor) || (!Number.isFinite(gateFactor)))) { return null };

  return roundToNearest(distancePoints + stylePoints + windFactor + gateFactor, 0.1);
}

const roundToNearest = (value, step) => {
  step || (step = 1.0);
  var inv = 1.0 / step;
  return Math.round(value * inv) / inv;
}

module.exports = calculateTotalPoints;