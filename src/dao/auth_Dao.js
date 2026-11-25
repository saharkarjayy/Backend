const db = require('../db/dbConn');
const common = require('../services/commonService');
const { encryptPassword } = require('../utils/passswordHelper');

// [Sp_GetLoginUserNamePassword]
/**
|--------------------------------------------------
| @UserName nvarchar(50),
	@Password nvarchar(50)
|--------------------------------------------------
*/
module.exports.authGetLoginUserNamePassword = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const password = encryptPassword(data.Password);
            // console.log(password)
            const request = new db.sql.Request();
            request.input('UserName', db.sql.NVarChar(50), data.UserName);
            request.input('Password', db.sql.NVarChar(50), password);
            
            // Execute the stored procedure
            request.execute('dbo.Sp_GetLoginUserNamePassword', (err, result) => {
                if (err) {
                    reject({
                        status: 0,
                        success: false,
                        error: 500,
                        message: err.message || 'An error occurred while executing the stored procedure.'
                    });
                } else {
                    resolve({
                        status: 1,
                        success: true,
                        error: 0,
                        message: 'Login successful',
                        data: result.recordset
                    });
                }
            });
        } catch (e) {
            reject({
                status: 0,
                success: false,
                error: 500,
                message: e.message || 'An exception occurred.'
            });
        }
    });
};