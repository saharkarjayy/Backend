const db = require('../db/dbConn');
const common = require('../services/commonService');



// Sp_HHT_ValidateLinkedData
/**
|--------------------------------------------------
|  @QR NVARCHAR(100) = NULL,
    @EpcValue NVARCHAR(100) = NULL
|--------------------------------------------------
*/


module.exports.getValidateLinkedData = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();
            request.input('QR', db.sql.NVarChar(100), data.QR);
            request.input('EpcValue', db.sql.NVarChar(100), data.EpcValue);
            
            request.execute('dbo.Sp_HHT_ValidateLinkedData', (err, result) => {
                if (err) {
                    console.log("SQL Error: ", err);
                    resolve({
                        success: false,
                        error: 500,
                        message: err.message || 'An error occurred while executing the stored procedure.'
                    });
                } else {
                    // console.log(result);
                    // Extract the status and message from the stored procedure result
                    const responseData = result.recordset[0]; // Get first row

                    if (!responseData) {
                        resolve({
                            success: false, 
                            error: 404,
                            message: 'No response from stored procedure.'
                        });
                    } else {
                       resolve({
                            status: responseData.Status,
                            success: true,
                            message: responseData,
                        });
                    }
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

// Sp_HHT_Delink_Material
/**
|--------------------------------------------------
| @QR NVARCHAR(255) = NULL,
    @EPCValue NVARCHAR(255) = NULL,
    @AvalStatus NVARCHAR(50),
    @UpdatedBy NVARCHAR(255) = NULL 
|--------------------------------------------------
*/
module.exports.DelinkMaterial = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();
            request.input('QR', db.sql.NVarChar(225), data.QR);
            request.input('EPCValue', db.sql.NVarChar(225), data.EpcValue);
            request.input('AvalStatus', db.sql.NVarChar(50), data.AvalStatus);
            request.input('UpdatedBy', db.sql.NVarChar(225), data.UpdatedBy);
            
            request.execute('dbo.Sp_HHT_Delink_Material', (err, result) => {
                if (err) {
                    console.log("SQL Error: ", err);
                    resolve({
                        success: false,
                        error: 500,
                        message: err.message || 'An error occurred while executing the stored procedure.'
                    });
                } else {
                    // console.log(result);
                    // Extract the status and message from the stored procedure result
                    const responseData = result.recordset[0]; // Get first row

                    if (!responseData) {
                        resolve({
                            success: false, 
                            error: 404,
                            message: 'No response from stored procedure.'
                        });
                    } else {
                       resolve({
                            status: responseData.Status,
                            success: true,
                            message: responseData,
                        });
                    }
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