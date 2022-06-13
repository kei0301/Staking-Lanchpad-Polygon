const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const lanchpadData = mongoose.Schema({
    optionId: {
        type: ObjectId,
        ref: 'option'
    },
    tokenImage: {
        type: String,
    },
    tokenIcon: {
        type: String,
    },
    tokenName: {
        type: String,
    },
    tokenTicker: {
        type: String
    },
    sitelink: {
        type: String
    },
    instagramlink: {
        type: String
    },
    telegramlink: {
        type: String
    },
    twitterlink: {
        type: String
    },
    description: {
        type: String
    },
    sdatetime: {
        type: String
    },
    cdatetime: {
        type: String
    },
    tokenSupply: {
        type: Number
    },
    initialSupply: {
        type: Number
    },
    initialMarketCap: {
        type: Number
    },
    permission: {
        type: Boolean
    },
    status: {
        type: String
    },
    network: {
        type: String
    },
    raiseAmount: {
        type: Number
    },
    tokenPrice: {
        type: Number
    }
},
    {
        timestamps: true
    });

const lanchpad = mongoose.model('lanchpadData', lanchpadData)

module.exports = lanchpad;
