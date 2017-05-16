'use strict';

const templates = require('./templates')

module.exports = hikaru.component({
    render (item) {
        return templates['news-item'].render(item)
    }
})
