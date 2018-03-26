const calculateDistancePoints = (distance, hillSize, kPoint) => {
    let dist = distance;
    let kpo = kPoint;
    const hillSizeArray = ['normal', 'big', 'mammoth'];
    const hillFactorArray = [2, 1.8, 1.2];
    if ((distance === undefined) || (hillSize === undefined) || (kPoint === undefined)) {
        return null;
    }

    if (Number.isFinite(distance)) { dist = roundToNearest(distance, 0.5) } else { return null };
    if (Number.isFinite(kPoint)) { kpo = roundToNearest(kPoint, 0.5) } else { return null };
    if ((distance < 0) || (kPoint < 0)) { return null };

    let key = hillSizeArray.findIndex((element) => { return element === hillSize })
    let sizeFactor = 1;
    let basicPoints = 60;
    if (key === -1) {
        return null;
    } else {
        switch (key) {
            case 0:
            case 1:
                sizeFactor = hillFactorArray[key];
                basicPoints = 60;
                break;
            case 2:
                sizeFactor = hillFactorArray[key];
                basicPoints = 120;
                break;

            default:
                return null;
                break;
        }
    }
    return roundToNearest((dist - kpo) * sizeFactor + basicPoints,0.1);
};

const roundToNearest = (value, step) => {
    step || (step = 1.0);
    var inv = 1.0 / step;
    return Math.round(value * inv) / inv;
}

module.exports = calculateDistancePoints;