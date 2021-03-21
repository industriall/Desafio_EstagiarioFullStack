const express = require('express');

const app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});

// const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');
// app.use(expressCspHeader({
//     policies: {
//         'default-src': [NONE],
//         'img-src': [SELF]
//     }
// }));

require('./app/database');

const routes = require('./routes');

app.use(express.json());

app.use(routes);

app.listen(3333);