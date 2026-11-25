const express = require('express');
const router = express.Router();
const dao = require('../dao/hht_reports_dao');
const common = require('../services/commonService');
// const verifyToken = require('../middleware/authMiddleware');

// router.use(verifyToken);


router.post('/getRFIDLinkByUserData', async (req, res) => {
    try {
        const result = await dao.getRFIDLinkByUserData(req.body);

        if (!result.success) {
            return res.status(result.error).send(common.sendResponse(false, 0, result.message, null, result.error));
        }
        res.status(200).send(common.sendResponse(true, 1, result.message, result.data, 0));
    } catch (e) {
        console.error(e);
        res.status(500).send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
    }
});

router.post('/getProductLocationHistory', async (req, res) => {
    try {
        const result = await dao.getProductLocationHistory(req.body);

        if (!result.success) {
            return res.status(result.error).send(common.sendResponse(false, 0, result.message, null, result.error));
        }
        res.status(200).send(common.sendResponse(true, 1, result.message, result.data, 0));
    } catch (e) {
        console.error(e);
        res.status(500).send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
    }
});

// API to get Stock Take Data
router.post('/getStockTakeData', async (req, res) => {
    try {
        const result = await dao.getStockTakeData(req.body);

        if (!result.success) {
            return res.status(result.error).send(common.sendResponse(false, 0, result.message, null, result.error));
        }
        res.status(200).send(common.sendResponse(true, 1, result.message, result.data, 0));
    } catch (e) {
        console.error(e);
        res.status(500).send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
    }
});

// API to get distinct Stock Take Numbers
router.post('/getStockTakeNumbers', async (req, res) => {
    try {
        const result = await dao.getStockTakeNumbers(req.body);

        if (!result.success) {
            return res.status(result.error).send(common.sendResponse(false, 0, result.message, null, result.error));
        }
        res.status(200).send(common.sendResponse(true, 1, result.message, result.data, 0));
    } catch (e) {
        console.error(e);
        res.status(500).send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
    }
    
});


module.exports = router;
