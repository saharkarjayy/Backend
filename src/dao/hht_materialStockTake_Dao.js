const db = require('../db/dbConn');
const common = require('../services/commonService');


module.exports.getNewStockTakeNumber = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();

            // Execute the stored procedure
            request.execute('dbo.Sp_HHT_StockTake_StockTakeNoNew', (err, result) => {
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

module.exports.getContinueStockTakeNumber = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();

            // Execute the stored procedure
            request.execute('dbo.Sp_HHT_StockTake_StockTakeNoContinue', (err, result) => {
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

module.exports.getStoreIdStockTake = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();

            // Execute the stored procedure
            request.execute('dbo.Sp_HHT_StockTake_GetStoreID', (err, result) => {
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

module.exports.getZoneIdStockTake = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();
                request.input('Store', db.sql.NVarChar(50), data.Store);

            // Execute the stored procedure
            request.execute('dbo.Sp_HHT_StockTake_GetZoneID', (err, result) => {
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

module.exports.insertStockTakeData = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();
                request.input('StockTakeNo', db.sql.NVarChar(50), data.StockTakeNo);
                request.input('EPCValue', db.sql.NVarChar(50), data.EPCValue);
                request.input('Store', db.sql.NVarChar(50), data.Store);
                request.input('ZoneID', db.sql.NVarChar(50), data.ZoneID);
                request.input('Rack', db.sql.NVarChar(50), data.Rack);
                request.input('Bin', db.sql.NVarChar(50), data.Bin);
                request.input('User', db.sql.NVarChar(50), data.User);

            // Execute the stored procedure
            request.execute('dbo.Sp_HHT_StockTake_InsertData', (err, result) => {
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
                request.input('StockTakeNo', db.sql.NVarChar(50), data.StockTakeNo);

            // Execute the stored procedure
            request.execute('dbo.Sp_HHT_StockTake_GetStockTakeData', (err, result) => {
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
            request.input('StockTakeNo', db.sql.NVarChar(50), data.StockTakeNo);

            request.execute('dbo.Sp_HHT_StockTake_GetStockTakeData', (err, result) => {
                if (err) {
                    console.error("SQL Error: ", err);
                    reject({
                        status: 0,
                        success: false,
                        error: 500,
                        message: err.message || 'An error occurred while executing the stored procedure.'
                    });
                } else {
                    // console.log("DB Response: ", result); // Debugging log
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


// Sp_HHT_UpdateConsumeQty_Master_ProductRFIDLink
/**
|--------------------------------------------------
| @ConsumeQty DECIMAL(18, 2),
    @CurrentQty DECIMAL(18, 2),
    @StockTakeNo NVARCHAR(100),
    @ItemCode NVARCHAR(100),
    @EPCValue NVARCHAR(200)

|--------------------------------------------------
*/
module.exports.SpHHTUpdateConsumeQtyMasterProductRFIDLink = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();
            request.input('ConsumeQty', db.sql.Decimal(18, 2), data.ConsumeQty);
            request.input('CurrentQty', db.sql.Decimal(18, 2), data.CurrentQty);
            request.input('StockTakeNo', db.sql.NVarChar(100), data.StockTakeNo);
            request.input('ItemCode', db.sql.NVarChar(100), data.ItemCode);
            request.input('EPCValue', db.sql.NVarChar(200), data.EPCValue);

            request.execute('dbo.Sp_HHT_UpdateConsumeQty_Master_ProductRFIDLink', (err, result) => {
                if (err) {
                    console.error("SQL Error: ", err);
                    reject({
                        status: 0,
                        success: false,
                        error: 500,
                        message: err.message || 'An error occurred while executing the stored procedure.'
                    });
                } else {
                    // console.log("DB Response: ", result); // Debugging log
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