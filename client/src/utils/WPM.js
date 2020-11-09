export const getWPM = (correct, miss, time) => {
    const allTypedEntries = correct + miss;
    return ((allTypedEntries/5) - miss)/time;
}