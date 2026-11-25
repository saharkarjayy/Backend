const express = require('express');
const router = express.Router();
const dao = require('../dao/material_rfid_link_dao');
const common = require('../services/commonService');
// const verifyToken = require('../middleware/authMiddleware');
// router.use(verifyToken);

router.post('/validateBarcode', async (req, res) => {
    try {
        const result = await dao.validateBarcode(req.body);
        if (result.error) {
            return res.status(result.error).send(common.sendResponse(false, 0, result.message, null, result.error));
        }
        res.status(200).send(common.sendResponse(true, result.status, result.message, result.data, 0));
    } catch (e) {
        console.log(e);
        res.status(500).send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
    }
});

router.post('/validateRFID', async (req, res) => {
    try {
        const result = await dao.validateRFID(req.body);
        if (result.error) {
            return res.status(result.error).send(common.sendResponse(false, 0, result.message, null, result.error));
        }
        res.status(200).send(common.sendResponse(true, result.status, result.message, result.data, 0));
    } catch (e) {
        console.log(e);
        res.status(500).send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
    }
});

router.post('/linkBarcodeAndRfid', async (req, res) => {
    try {
        const result = await dao.linkBarcodeAndRfid(req.body);
        if (result.error) {
            return res.status(result.error).send(common.sendMaterialRfidLinkResponse(false, 0, result.message, null, result.error));
        }
        res.status(200).send(common.sendResponse(true, result.status, result.message, result.linkDate, result.data, 0));
    } catch (e) {
        console.log(e);
        res.status(500).send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
    }
});


// getTagsInitialValue
router.post('/getTagsInitialValue', async (req, res) => {
    try {
        const result = await dao.getTagsInitialValue(req.body);
        if (result.error) {
            return res.status(result.error).send(common.sendResponse(false, 0, result.message, null, result.error));
        }
        res.status(200).send(common.sendResponse(true, result.status, result.message, result.data, 0));
    } catch (e) {
        console.log(e);
        res.status(500).send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
    }
})
module.exports = router;
