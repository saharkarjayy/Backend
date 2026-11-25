const express = require('express');
const router = express.Router();
const dao = require('../dao/additional_dao');
const common = require('../services/commonService');
// const verifyToken = require('../middleware/authMiddleware');

// router.use(verifyToken);


router.post('/getAdditionalData', async (req, res) => {
    try {
        const result = await dao.getAdditionalData(req.body);

        if (!result.success) {
            return res.status(result.error).send(common.sendResponse(false, 0, result.message, null, result.error));
        }
        res.status(200).send(common.sendResponse(true, 1, result.message, result.data, 0));
    } catch (e) {
        console.error(e);
        res.status(500).send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
    }
});



router.post('/insertAdditional', async (req, res) => {
    try {
        const result = await dao.insertAdditional(req.body);
        if (result.error) {
            return res.status(result.error).send(common.sendResponse(false, 0, result.message, null, result.error));
        }
        res.status(200).send(common.sendResponse(true, 1, result.message, result.data, 0));
    } catch (e) {
        console.log(e);
        res.status(500).send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
    }
});


// router.post('/updateAdditional', async (req, res) => {
//     try {
//         const result = await dao.updateAdditional(req.body);
//         if (result.error) {
//             return res.status(result.error).send(common.sendResponse(false, 0, result.message, null, result.error));
//         }
//         res.status(200).send(common.sendResponse(true, 1, result.message, result.data, 0));
//     } catch (e) {
//         console.log(e);
//         res.status(500).send(common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002));
//     }
// });



module.exports = router;
