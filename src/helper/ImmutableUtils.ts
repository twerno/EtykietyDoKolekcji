
export default {
    updateArray,
}

function updateArray<T>(source: T[], idx: number, delta: Partial<T>): T[] {
    return [...source]
        .map((v, _idx) => _idx === idx
            ? { ...v, ...delta }
            : v
        );
}
