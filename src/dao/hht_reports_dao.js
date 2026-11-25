const db = require('../db/dbConn');
const common = require('../services/commonService');


module.exports.getRFIDLinkByUserData = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();
                        request.input('FromLinkDate', db.sql.DateTime, data.FromLinkDate);
                        request.input('ToLinkDate', db.sql.DateTime, data.ToLinkDate);
                        request.input('Project', db.sql.NVarChar(100), data.Project);
                        request.input('ItemDescription', db.sql.NVarChar(100), data.ItemDescription);
                        request.input('LinkBy', db.sql.NVarChar(50), data.LinkBy);
                        request.input('AvalStatus', db.sql.NVarChar(50), data.AvalStatus);

            // Execute the stored procedure
            request.execute('dbo.Sp_GetRFIDLinkByUserData', (err, result) => {
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

module.exports.getProductLocationHistory = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();
                        request.input('QR', db.sql.NVarChar(100), data.QR);
                        request.input('EPCValue', db.sql.NVarChar(50), data.EPCValue);

            // Execute the stored procedure
            request.execute('dbo.Sp_GetProductLocationHistory', (err, result) => {
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


module.exports.getStockTakeData = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();
            request.input('FromDate', db.sql.NVarChar(50), data.FromDate);
            request.input('ToDate', db.sql.NVarChar(50), data.ToDate);
            request.input('StockTakeNo', db.sql.NVarChar(50), data.StockTakeNo);
            request.input('DateCheck', db.sql.NVarChar(50), data.DateCheck);

            // Execute the stored procedure
            request.execute('dbo.Sp_HHT_Rep_StockTakeData', (err, result) => {
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

module.exports.getStockTakeNumbers = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();

            // Execute the stored procedure
            request.execute('dbo.Sp_HHT_Rep_StockTakeNo', (err, result) => {
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
