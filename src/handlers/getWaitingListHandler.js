'use strict';

let waitingListModel = require('../models/waitingList');

async function getJoinedLists(email) {
    const results = await waitingListModel.find({ "email": email });
    var joinedLists = [];
    results.forEach(element => {
        joinedLists.push(element._doc.whiskey_type);
    });
    return joinedLists;
}

module.exports = {
    getJoinedLists
}