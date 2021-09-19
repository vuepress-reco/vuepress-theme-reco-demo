"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyPlainObject = exports.isPlainObject = void 0;
const isPlainObject = (val) => Object.prototype.toString.call(val) === '[object Object]';
exports.isPlainObject = isPlainObject;
const isEmptyPlainObject = (val) => Object.prototype.toString.call(val) === '[object Object]' &&
    Object.keys(val).length === 0;
exports.isEmptyPlainObject = isEmptyPlainObject;
