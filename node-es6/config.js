
const helpers = {
    json: (o) => JSON.stringify(o, null, 4)
}

module.exports = {
    port: 3000,
    handlebars: {
        extension     : 'html',
        viewsDir      : 'components',
        partialsDir   : 'components',
        defaultLayout : 'main',
        partialId     : (path) => path.split('/')[0],
        viewPath      : (name) => `${name}/${name}`,
        helpers       : helpers
    }
}
