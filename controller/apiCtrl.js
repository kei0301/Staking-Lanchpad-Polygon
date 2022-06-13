const lanchpad = require("../models/lanchpad");
const airdrop = require("../models/airdrop");
const fundingList = require("../models/fundingList");

const getlanchpadData = async (req, res) => {
    lanchpad.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
}

const getAirdropData = (req, res) => {
    airdrop.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err)
            res.send(err);
        })
}

const UploadContract = async (req, res) => {

    let Option = new lanchpad({
        tokenImage: req.images.tokenImage,
        tokenIcon: req.images.tokenIcon,
        tokenName: req.body.tokenName,
        tokenTicker: req.body.tokenTicker,
        sitelink: req.body.sitelink,
        instagramlink: req.body.instagramlink,
        telegramlink: req.body.telegramlink,
        twitterlink: req.body.twitterlink,
        description: req.body.description,
        sdatetime: req.body.sdatetime,
        cdatetime: req.body.cdatetime,
        tokenSupply: req.body.tokenSupply,
        initialSupply: req.body.initialSupply,
        initialMarketCap: req.body.initialMarketCap,
        permission: req.body.permission,
        status: req.body.status,
        network: req.body.network,
        tokenPrice: req.body.tokenPrice,
        raiseAmount: req.body.raiseAmount
    });

    await Option.save()
        .then(result => {
            res.send('success');
        })
}

const imageMulti = (req, res, next) => {
    let d = req.files
    let row = {}
    for (let i in d) {
        row[d[i].fieldname] = d[i].filename
    }
    req.images = row
    next()
}

const AirdropData = (req, res, next) => {
    let Option = new airdrop({
        tokenImage: req.images.tokenImage,
        tokenIcon: req.images.tokenIcon,
        tokenAbi: req.images.tokenAbi,
        tokenName: req.body.tokenName,
        AirdropAmount: req.body.AirdropAmount,
        Address: req.body.Address,
        tokenSupply: req.body.totalSupply,
        state: 'true'
    });

    Option.save()
        .then(result => {
            res.send('success');
        })
}

const updateAirdropData = async (req, res) => {
    let airdropModel = await airdrop.findOne({ _id: req.body.data._id });
    airdropModel.AirdropAmount = req.body.data.balance;
    airdropModel.Address = req.body.data.address;
    airdropModel.tokenSupply = req.body.data.supply;
    airdropModel.state = req.body.data.state;
    airdropModel.save()
        .then(result => {
            res.send('success')
        })
}

const fundingToken = async (req, res) => {
    fundingList.findOne({ tx: req.body.tx.transactionHash })
        .then(result => {
            let fundModel = new fundingList({
                address: req.body.address,
                chainId: req.body.chainId,
                hash: req.body.tx.transactionHash,
                amount: req.body.amount
            })
            fundModel.save()
                .then(result => {
                    res.send('success');
                })
                .catch(err => {
                    console.log(err);
                    res.send(err)
                })
        })
        .catch(err => {
            console.log(err, 'err')
            res.send(err);
        })
}

const getFundingData = (req, res) => {
    fundingList.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        })
}

//---------------------------------------

module.exports = {
    UploadContract,
    imageMulti,
    AirdropData,
    getlanchpadData,
    getAirdropData,
    updateAirdropData,
    fundingToken,
    getFundingData,

    // Addtoken,
    // GetData,
    // Removetoken,
    // GetPrice,
    // GetToken,
    // GetOptionlist,
    // getChartData,
    // getTradingHistory,
    // getAds
};