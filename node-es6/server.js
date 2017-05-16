'use strict';

const koa          = require('koa')
const handlebars   = require('koa-handlebars')
const browserify   = require('koa-browserify')
const config       = require('./config')
const templates    = require('./templates')

// this is the data you'd fetch from storage
const initialState = require('./initial-state')

function* index () {
    yield this.render('news-feed', initialState)
}

// templates(compiled => {

    const hbs = handlebars(Object.assign(config.handlebars, {
        data: { initialState }
    }))

    const app = koa()
        .use(templates)
        .use(hbs)
        .use(browserify({ root: './scripts' }))
        .use(index)
        .listen(config.port)
// })

console.log(`Listening on port ${config.port}`)
