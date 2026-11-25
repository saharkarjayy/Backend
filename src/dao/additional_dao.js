const db = require('../db/dbConn');
const common = require('../services/commonService');


module.exports.getAdditionalData = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();
            request.input('Title', db.sql.NVarChar(100), data.Title || '');

            // Execute the stored procedure
            request.execute('dbo.sp_SelectAdditional', (err, result) => {
                if (err) {
                    console.error("SQL Error: ", err);
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
                        message: 'Data fetched successfully.',
                        data: result.recordset
                    });
                }
            });
        } catch (e) {
            console.error("Exception: ", e);
            reject({
                status: 0,
                success: false,
                error: 500,
                message: e.message || 'An exception occurred.'
            });
        }
    });
};



module.exports.insertAdditional = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();
            // request.input('ID', db.sql.Int, emailDetails.id);
            request.input('Title', db.sql.NVarChar(100), data.Title);
            request.input('ListText', db.sql.NVarChar, data.ListText);
            request.input('CreatedBy', db.sql.NVarChar(50), data.CreatedBy);
            request.input('CreatedAt', db.sql.DateTime, data.CreatedAt);

            request.execute('dbo.sp_InsertAdditional', (err, result) => {
                if (err) {
                    console.log("SQL Error: ", err);
                    resolve({
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
                        message: 'Add successfully.',
                    });
                }
            });
        } catch (e) {
            console.log("Exception: ", e);
            resolve({
                status: 0,
                success: false,
                error: 500,
                message: e.message || 'An exception occurred.'
            });
        }
    });
};



module.exports.updateAdditional = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();
            request.input('Id', db.sql.Int, data.Id);
            request.input('Title', db.sql.NVarChar(100), data.Title);
            request.input('ListText', db.sql.NVarChar, data.ListText);
            request.input('UpdatedBy', db.sql.NVarChar(50), data.UpdatedBy);
            request.input('UpdatedAt', db.sql.DateTime, data.UpdatedAt);

            request.execute('dbo.sp_UpdateAdditional', (err, result) => {
                if (err) {
                    console.log("SQL Error: ", err);
                    resolve({
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
                        message: 'Update successfully.',
                    });
                }
            });
        } catch (e) {
            console.log("Exception: ", e);
            resolve({
                status: 0,
                success: false,
                error: 500,
                message: e.message || 'An exception occurred.'
            });
        }
    });
};