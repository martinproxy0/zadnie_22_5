const calculateDistancePoints = (distance, hillSize, kPoint) => {
    const hillSizeArray = ['normal', 'big', 'mammoth'];
    if ((distance === undefined) || (hillSize === undefined) || (kPoint === undefined)) {
        return null;
    }

    if (Number.isFinite(distance)) { distanse = roundTonearest(distance,0.5) } else { return null }; 

    if (hillSizeArray.findIndex((element) => { return element === hillSize }) === -1) {        
        return null;
    }

    return 1;
};

const roundTonearest = (value, step) => {
    step || (step = 1.0);
    var inv = 1.0 / step;
    return Math.round(value * inv) / inv;
}

module.exports = calculateDistancePoints;