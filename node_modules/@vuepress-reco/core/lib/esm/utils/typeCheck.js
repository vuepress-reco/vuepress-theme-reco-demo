export const isPlainObject = (val) => Object.prototype.toString.call(val) === '[object Object]';
export const isEmptyPlainObject = (val) => Object.prototype.toString.call(val) === '[object Object]' &&
    Object.keys(val).length === 0;
