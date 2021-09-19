const { compress } = require('csso').syntax;
const postcssToCsso = require('./lib/postcssToCsso.js');
const cssoToPostcss = require('./lib/cssoToPostcss.js');

module.exports = (options = {}) => ({
    postcssPlugin: 'postcss-csso',
    OnceExit(root, { result, postcss }) {
        result.root = cssoToPostcss(compress(postcssToCsso(root), options).ast, postcss);
    }
});
module.exports.postcss = true;
