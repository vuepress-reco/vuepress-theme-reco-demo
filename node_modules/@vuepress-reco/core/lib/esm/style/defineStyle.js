export const defineStyle = (options) => {
    return (themeConfig) => {
        const { pages, plugins, ...otherCustomOptions } = options(themeConfig);
        return {
            plugins: [['@vuepress-reco/page', pages || []], ...plugins],
            ...otherCustomOptions,
        };
    };
};
