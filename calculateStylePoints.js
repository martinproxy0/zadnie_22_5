const calculateStylePoints = (styleNotes) => {
    // The parameter of calculateStylePoints function can`t be undefined and must be an array of 5 number items
    if ((styleNotes === undefined)||(!Array.isArray(styleNotes))||(styleNotes.length < 5)) {
        return null;
    }

    if ((!styleNotes.every(noteIsNumber))||(!styleNotes.every(noteIsBelowAnderTreshold))) {
        return null;
    }

    // Sort results
    styleNotes.sort(function(a, b) {
        return a - b;
      });

    // Removing extreme results
    styleNotes.splice(0,1);
    styleNotes.pop();

    // Final calculated value
    return (styleNotes.reduce(reducer));
};

// Other functions
const noteIsNumber = currentNote => {
    return Number.isFinite(currentNote);
}

const noteIsBelowAnderTreshold = currentNote => {
    return ((currentNote <= 20) && (currentNote >= 0));
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

// Module export
module.exports = calculateStylePoints;