const crypto = require ('crypto')
const { originalKey } =  require('./constants.js');


const key = crypto.scryptSync(originalKey, 'salt', 24);
const encryptPassword = (password) => {
    try {
      const iv = Buffer.alloc(8, 0); // TripleDES uses 8-byte IV
      const cipher = crypto.createCipheriv('des-ede3-cbc', key, iv);
      let encrypted = cipher.update(password, 'utf8', 'base64');
      encrypted += cipher.final('base64');
      return encrypted;
    } catch (ex) {
      throw new Error("Error in encryption: " + ex.message);
    }
  }

  module.exports = { encryptPassword };