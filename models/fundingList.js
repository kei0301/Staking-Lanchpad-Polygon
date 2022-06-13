const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const FundingListSchema = mongoose.Schema({
    optionId: {
        type: ObjectId,
        ref: 'option'
    },
    address: {
        type: String,
    },
    hash: {
        type: String,
    },
    chainId: {
        type: Number
    },
    amount: {
        type: Number
    }
},
    {
        timestamps: true
    });

const FundingList = mongoose.model('fundingList', FundingListSchema)

module.exports = FundingList;
