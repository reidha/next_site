// eslint-disable-next-line no-undef
module.exports = {
    exportTrailingSlash: true,
    exportPathMap: () => ({
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/products/todo': { page: '/products/todo' },
        '/products/srcr': { page: '/products/srcr' }
    })
};
