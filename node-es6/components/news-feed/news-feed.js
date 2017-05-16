'use strict';

const templates = require('./templates')

module.exports = hikaru.component({
    render (state) {
        return templates['news-feed'].render(state.news)
    }
})
