export const getWPM = (correct, miss, time) => {
    const allTypedEntries = correct + miss;
    const grossWPM = (allTypedEntries/5)/time;
    return Math.round(grossWPM);
}

export const getScore = (correct, miss, time, accuracy) => {
    const allTypedEntries = correct + miss;
    const grossWPM = allTypedEntries/5/time;
    const score = grossWPM * accuracy/100;
    console.log(grossWPM, accuracy, score)
    return Math.round(score);
}