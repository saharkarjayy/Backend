const express = require('express');
const router = express.Router();
const dao = require('../dao/hht_materialStockTake_Dao');
const common = require('../services/commonService');
// const verifyToken = require('../middleware/authMiddleware');

// router.use(verifyToken);


router.post('/getNewStockTakeNumber', async (req, res) => {
    try {
        const result = await dao.getNewStockTakeNumber(req.body);

        if (!result.success) {
            return res.status(result.error).send(common.sendResponse(false, 0, result.message, null, result.error));
        }
        res.status(200).send(common.sendResponse(true, 1, result.message, result.data, 0));
    } catch (e) {
        console.error(e);
        res.status(500).send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
    }
});

router.post('/getContinueStockTakeNumber', async (req, res) => {
    try {
        const result = await dao.getContinueStockTakeNumber(req.body);

        if (!result.success) {
            return res.status(result.error).send(common.sendResponse(false, 0, result.message, null, result.error));
        }
        res.status(200).send(common.sendResponse(true, 1, result.message, result.data, 0));
    } catch (e) {
        console.error(e);
        res.status(500).send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
    }
});

router.post('/getStoreIdStockTake', async (req, res) => {
    try {
        const result = await dao.getStoreIdStockTake(req.body);

        if (!result.success) {
            return res.status(result.error).send(common.sendResponse(false, 0, result.message, null, result.error));
        }
        res.status(200).send(common.sendResponse(true, 1, result.message, result.data, 0));
    } catch (e) {
        console.error(e);
        res.status(500).send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
    }
});

router.post('/getZoneIdStockTake', async (req, res) => {
    try {
        const result = await dao.getZoneIdStockTake(req.body);

        if (!result.success) {
            return res.status(result.error).send(common.sendResponse(false, 0, result.message, null, result.error));
        }
        res.status(200).send(common.sendResponse(true, 1, result.message, result.data, 0));
    } catch (e) {
        console.error(e);
        res.status(500).send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
    }
});

router.post('/insertStockTakeData', async (req, res) => {
    try {
        const result = await dao.insertStockTakeData(req.body);

        if (!result.success) {
            return res.status(result.error).send(common.sendResponse(false, 0, result.message, null, result.error));
        }
        res.status(200).send(common.sendResponse(true, 1, result.message, result.data, 0));
    } catch (e) {
        console.error(e);
        res.status(500).send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
    }
});

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

router.post('/getStockTakeData', async (req, res) => {
    try {
        console.log("Incoming Request Body: ", req.body); // Log request body
        const result = await dao.getStockTakeData(req.body);

        console.log("API Response: ", result); // Log API response

        if (!result.success) {
            return res.status(result.error).send(common.sendResponse(false, 0, result.message, null, result.error));
        }
        res.status(200).send(common.sendResponse(true, 1, result.message, result.data, 0));
    } catch (e) {
        console.error(e);
        res.status(500).send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
    }
});
// SpHHTUpdateConsumeQtyMasterProductRFIDLink
router.post('/updateConsumeQtyMasterProductRFIDLink', async (req, res) => {
    try {
        const result = await dao.SpHHTUpdateConsumeQtyMasterProductRFIDLink(req.body);

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
