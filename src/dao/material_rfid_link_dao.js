const db = require('../db/dbConn');
const common = require('../services/commonService');

module.exports.validateBarcode = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();
            request.input('QR', db.sql.NVarChar(100), data.QR);

            request.execute('dbo.Sp_ValidateQR', (err, result) => {
                if (err) {
                    console.log("SQL Error: ", err);
                    resolve({
                        success: false,
                        error: 500,
                        message: err.message || 'An error occurred while executing the stored procedure.'
                    });
                } else {
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
                            message: responseData.Message,
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

module.exports.validateRFID = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();
            request.input('EPCValue', db.sql.NVarChar(100), data.EPCValue);

            request.execute('dbo.Sp_ValidateEPC', (err, result) => {
                if (err) {
                    console.log("SQL Error: ", err);
                    resolve({
                        success: false,
                        error: 500,
                        message: err.message || 'An error occurred while executing the stored procedure.'
                    });
                } else {
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
                            message: responseData.Message,
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

module.exports.linkBarcodeAndRfid = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();
            request.input('QR', db.sql.NVarChar(100), data.QR);
            request.input('Warehouse', db.sql.NVarChar(50), data.Warehouse);
            request.input('ItemCode', db.sql.NVarChar(50), data.ItemCode);
            request.input('Lot', db.sql.NVarChar(50), data.Lot);
            request.input('QR_Loc', db.sql.NVarChar(50), data.QR_Loc);
            request.input('SerialNo', db.sql.NVarChar(50), data.SerialNo);
            request.input('EPCValue', db.sql.NVarChar(50), data.EPCValue);
            request.input('User', db.sql.NVarChar(50), data.User);
            request.input('EditStatus', db.sql.NVarChar(50), data.EditStatus);

            request.execute('dbo.Sp_MaterialLink_InsertProductRFID', (err, result) => {
                if (err) {
                    console.log("SQL Error: ", err);
                    resolve({
                        success: false,
                        error: 500,
                        message: err.message || 'An error occurred while executing the stored procedure.'
                    });
                } else {
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
                            linkDate: responseData.LinkDate,
                            success: true,
                            message: responseData.Message,
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


// Sp_HHT_RFID_Tag_InitialValue_GetData

module.exports.getTagsInitialValue = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();
            request.execute('dbo.Sp_HHT_RFID_Tag_InitialValue_GetData', (err, result) => {
                if (err) {
                    console.log("SQL Error: ", err);
                    resolve({
                        success: false,
                        error: 500,
                        message: err.message || 'An error occurred while executing the stored procedure.'
                    });
                } else {
                    // Extract the status and message from the stored procedure result
                    const responseData = result.recordset; // Get first row

                    if (!responseData) {
                        resolve({
                            success: false,
                            error: 404,
                            message: 'No response from stored procedure.'
                        });
                    } else {
                       resolve({
                            status: 'T',
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