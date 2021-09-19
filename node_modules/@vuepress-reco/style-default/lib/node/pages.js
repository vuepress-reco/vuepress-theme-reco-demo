"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pages = void 0;
exports.pages = [
    {
        type: 'frontmatter',
        frontmatterKey: 'categories',
        path: '/categories/',
        layout: 'Categories',
        pagination: 10,
    },
    {
        type: 'frontmatter',
        frontmatterKey: 'tags',
        path: '/tags/',
        layout: 'Categories',
        pagination: 10,
    },
    {
        path: '/timeline/',
        layout: 'TimeLine',
    },
];
