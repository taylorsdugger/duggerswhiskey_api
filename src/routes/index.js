'use strict'

const sendEmailToOwner = require('./sendEmailToOwner');
const joinWaitingList = require('./joinWaitingList');
const getJoinedList = require('./getJoinedList');
const getReviews = require('./getReviews');
const postReviews = require('./postReviews');

module.exports = [].concat(sendEmailToOwner, joinWaitingList, getJoinedList, getReviews, postReviews);