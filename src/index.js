export function tryOrValue(tryFn, catchValue) {
    try {
        return tryFn();
    } catch (e) {
        return typeof catchValue === 'function' ? catchValue() : catchValue;
    }
}

export default tryOrValue;
