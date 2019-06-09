'use strict'

var mongoose = require('mongoose');
const config = require('../config');

const connectToMongo = async () => {
    return new Promise( async (resolve) => {
        try {
            await mongoose.connect(config.mongoDB.uri, { useNewUrlParser: true });
            console.log('connected to db');
            resolve();
        } catch (err) {
            console.log(err);
        }
    });
}

module.exports = {
    connectToMongo
}