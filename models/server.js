const express = require('express');

const demo_route = require('../routes/demo');


class Server {
    constructor() {
        this.app = express();

        this.routes();
    }

    routes() {
        this.app.use('/demo', demo_route);
    }

    listen() {
        this.app.listen(8080, () => {
            console.log('Escuchando http://localhost:8080')
        });
    }
}

module.exports = Server;