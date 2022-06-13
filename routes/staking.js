const express = require('express');
const apiCtrl = require('../controller/apiCtrl.js');
const router = express.Router();
const fileconfig = require("../dir");
const multer = require('multer');
const FileUploader = require('../middleware/upload')
const path = require("path")
// trending

const Uploader = new FileUploader(path.join(fileconfig.BASEURL))

router.post('/UploadData', multer({ storage: Uploader.storage, fileFilter: Uploader.filter }).any(), apiCtrl.imageMulti, apiCtrl.UploadContract);
router.post('/AirdropData', multer({ storage: Uploader.storage, fileFilter: Uploader.filter }).any(), apiCtrl.imageMulti, apiCtrl.AirdropData);
router.get('/getlanchpadData', apiCtrl.getlanchpadData);
router.get('/getAirdropData', apiCtrl.getAirdropData);
router.post('/updateAirdropData', apiCtrl.updateAirdropData);
router.post('/funding', apiCtrl.fundingToken);
router.get('/getFundingData', apiCtrl.getFundingData);

// router.post('/tradingHistory', apiCtrl.getTradingHistory);
// router.post('/getAds', apiCtrl.getAds);

module.exports = router;