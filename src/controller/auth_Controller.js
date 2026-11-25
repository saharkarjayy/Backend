const express = require('express');
const router = express.Router();
const dao = require('../dao/auth_Dao'); // Corrected import path
const common = require('../services/commonService');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/constants');


// Login endpoint
router.post('/login', async (req, res) => {
    try {
        
        if (!req.body.UserName || !req.body.Password) {
            return res.status(400).send(
                common.sendResponse(false, 0, 'Username and password are required', null, 1001)
            );
        }

        const result = await dao.authGetLoginUserNamePassword(req.body);
        // console.log(result);
        
        if (!result.success) {
            return res.status(result.error).send(
                common.sendResponse(false, 0, result.message, null, result.error)
            );
        }

        if (!result.data || result.data.length === 0) {
            return res.status(200).send(
                common.sendResponse(false, 0, 'Invalid username or password', null, 1003)
            );
        }

        // Exclude sensitive fields
        const user = result.data[0];
        // console.log({user:{safeUserData}});
        // const token = jwt.sign(safeUserData, JWT_SECRET, { expiresIn: '1h' });
        const token = jwt.sign({ user }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).send(
            common.sendResponse(true, 1, 'Login successful', token, 0)
        );
    } catch (e) {
        console.error(e);
        res.status(500).send(
            common.sendResponse(false, 0, 'Something went wrong. Please try again.', null, 1002)
        );
    }
});


module.exports = router;