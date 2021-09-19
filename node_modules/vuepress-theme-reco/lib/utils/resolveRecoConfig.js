"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveRecoConfig = exports.resolveRecoConfigPath = void 0;
const utils_1 = require("@vuepress/utils");
// 获取 reco.config.js 的绝对路径
const resolveRecoConfigPath = (cwd = process.cwd()) => {
    const recoConfigPath = [
        utils_1.path.resolve(cwd, 'reco.config.ts'),
        utils_1.path.resolve(cwd, 'reco.config.js'),
    ].find((item) => utils_1.fs.pathExistsSync(item));
    if (!recoConfigPath) {
        console.error('THEME RECO ERROR: ', 'Please add reco.config.js in root path.');
    }
    return recoConfigPath;
};
exports.resolveRecoConfigPath = resolveRecoConfigPath;
// 获取 reco.config.js 的内容
const resolveRecoConfig = (path) => {
    if (path === undefined)
        return {};
    return require(path) || {};
};
exports.resolveRecoConfig = resolveRecoConfig;
