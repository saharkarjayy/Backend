require('dotenv').config();
const originalKey = process.env.ORIGINAL_KEY || 'sblw-3hn8-sqoy19';
const JWT_SECRET = process.env.JWT_SECRET || 'bdspl'; 

module.exports = {
    originalKey,
    JWT_SECRET
}