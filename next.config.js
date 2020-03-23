module.exports = {
    exportTrailingSlash: true,
    exportPathMap: () => ({
        '/': {page: '/'},
        '/apps/todo': {page: '/apps/todo'}
    })
};
