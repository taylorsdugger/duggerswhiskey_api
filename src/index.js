'use strict';

const Hapi = require('hapi');
const Joi = require('joi');
const routes = require('./routes');
const mongo = require('./utils/mongoHelper');

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

const server = Hapi.server({
    host: 'localhost',
    port: 3001
});

const init = async () => {
    try {
        await mongo.connectToMongo();
        await server.route(routes);
        await server.start();
        console.log(`Server running at: ${server.info.uri}`);
    } catch (error) {
        console.log(error);
    }
};

init();