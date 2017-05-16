
const fs   = require('fs')
const path = require('path')
const then = require('thenify')

const root = './components'

const templates = {}
const compiler = require('handlebars/dist/cjs/precompiler')

var compileTemplates = then(function(cb) {
    compiler.loadTemplates({
        templates,
        commonjs: 'handlebars',
        extension: 'html',
        files: fs.readdirSync(root).map(name => path.join(root, name, name + '.html'))
    }, (err, compiled) => {
        callback(compiled.templates)
    })
})

module.exports = function* () {
    
}
