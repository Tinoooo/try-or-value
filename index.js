import { isFunction } from 'lodash';

export function tryOrValue(tryFn, catchValue) {
    try {
        return tryFn();
    } catch (e) {
        return isFunction(catchValue) ? catchValue() : catchValue;
    }
}

export default tryOrValue;
