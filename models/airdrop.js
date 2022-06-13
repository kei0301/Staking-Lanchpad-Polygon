const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const airdrop_data = mongoose.Schema({
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
    tokenAbi: {
        type: String
    },
    tokenName: {
        type: String,
    },
    Address: {
        type: String,
    },
    tokenSupply: {
        type: Number
    },
    AirdropAmount: {
        type: Number
    },
    state: {
        type: String
    }
},
    {
        timestamps: true
    });

const airdrop = mongoose.model('airdrop', airdrop_data)

module.exports = airdrop;
