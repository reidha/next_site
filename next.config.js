module.exports = {
    exportTrailingSlash: true,
    exportPathMap: () => ({
        '/': {page: '/'},
        '/about': {page: '/about'},
        '/products/todo': {page: '/products/todo'}
    })
};
