
export default {
    updateArray,
    push,
    remove,
    shallowMerge
}

function updateArray<T>(source: T[], idx: number, delta: Partial<T>): T[] {
    return [...source]
        .map((v, _idx) => _idx === idx
            ? { ...v, ...delta }
            : v
        );
}

function push<T>(source: T[], val: T): T[] {
    return [...source, val];
}

function remove<T>(source: T[], idx: number): T[] {
    return [...source.slice(0, idx), ...source.slice(idx + 1)];
}

function shallowMerge<T>(source: T, delta: Partial<T>): T {
    return { ...source, ...delta };
}