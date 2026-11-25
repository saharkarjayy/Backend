const express = require('express');
const router = express.Router();
const dao = require('../dao/dLinkMaterila_dao');
const common = require('../services/commonService');




router.post('/getValidateLinkedData', async (req, res) => {
    try {
        const result = await dao.getValidateLinkedData(req.body);
        if (result.error) {
            return res.status(result.error).send(common.sendResponse(false, 0, result.message, null, result.error));
        }
        res.status(200).send(common.sendResponse(true, result.status, result.message, result.data, 0));
    } catch (e) {
        console.log(e);
        res.status(500).send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
    }
})

// DelinkMaterial
router.post('/DelinkMaterial', async (req, res) => {
    try {
        const result = await dao.DelinkMaterial(req.body);
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