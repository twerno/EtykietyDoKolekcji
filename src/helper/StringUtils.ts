export default {
    lowerCaseCompareFn,
    lowerCaseCompare
}

function lowerCaseCompareFn(a?: string) {
    const aLowerCase = a?.toLowerCase();
    return (b?: string) => aLowerCase === b?.toLowerCase();
};


function lowerCaseCompare(a?: string, b?: string) {
    return a?.toLowerCase() === b?.toLowerCase();
}