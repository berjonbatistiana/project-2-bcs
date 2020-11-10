export const getWPM = (correct, miss, time) => {
    const allTypedEntries = correct + miss;
    const grossWPM = allTypedEntries/5/time;
    return grossWPM;
}