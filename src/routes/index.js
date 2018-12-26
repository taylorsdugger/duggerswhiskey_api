'use strict'

const sendEmailToOwner = require('./sendEmailToOwner');
const joinWaitingList = require('./joinWaitingList');
const getJoinedList = require('./getJoinedList');

module.exports = [].concat(sendEmailToOwner, joinWaitingList, getJoinedList);