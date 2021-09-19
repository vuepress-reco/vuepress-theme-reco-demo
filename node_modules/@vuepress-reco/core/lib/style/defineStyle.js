"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineStyle = void 0;
const defineStyle = (options) => {
    return (themeConfig) => {
        const { pages, plugins, ...otherCustomOptions } = options(themeConfig);
        return {
            plugins: [['@vuepress-reco/page', pages || []], ...plugins],
            ...otherCustomOptions,
        };
    };
};
exports.defineStyle = defineStyle;
