'use stict'

let waitingListModel = require('../models/waitingList');

async function handleWaitListJoin(payload) {
    let waitingList = new waitingListModel({
        email: payload.email,
        given_name: payload.given_name,
        family_name: payload.family_name,
        whiskey_type: payload.whiskey_type
    });

    return await waitingList.save();
}

module.exports = {
    handleWaitListJoin
}