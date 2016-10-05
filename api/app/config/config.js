var express = require('express');
var load = require('express-load');
var expressValidator = require('express-validator');

module.exports = function() {
    var app = express();
    app.use(expressValidator());
    load('models', {cwd:'app'})
        .then('database')
        .then('controllers')
        .into(app);
    return app;
}
