const jwt = require('jsonwebtoken');
const common = require('../services/commonService');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    try {
        // Get the token from the Authorization header
        const bearerHeader = req.headers['authorization'];
        
        if (!bearerHeader) {
            return res.status(401).send(common.sendResponse(
                false, 
                0, 
                'Access denied. No token provided.', 
                null, 
                401
            ));
        }

        // Split 'Bearer token'
        const bearer = bearerHeader.split(' ');
        const token = bearer[1];

        if (!token) {
            return res.status(401).send(common.sendResponse(
                false, 
                0, 
                'Access denied. Invalid token format.', 
                null, 
                401
            ));
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use your secret key here
        req.user = decoded; // Add user info to request object
        next();
    } catch (error) {
        return res.status(403).send(common.sendResponse(
            false, 
            0, 
            'Invalid token.', 
            null, 
            403
        ));
    }
};

module.exports = verifyToken;