export default {
    mutableSwitchArrayElements,
    immutableSwitchArrayElement
}

function mutableSwitchArrayElements<T>(arr: T[], idx1: number, idx2: number) {
    if (!arr || idx1 < 0 || idx2 < 0
        || idx1 >= arr.length || idx2 >= arr.length) {
        return arr;
    }

    const tmpEl: T = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = tmpEl;

    return arr;
}

function immutableSwitchArrayElement<T>(arr: T[], idx1: number, idx2: number) {
    return mutableSwitchArrayElements([...arr], idx1, idx2);
}