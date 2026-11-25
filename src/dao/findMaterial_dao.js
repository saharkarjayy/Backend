const db = require('../db/dbConn');
const common = require('../services/commonService');


module.exports.getProductRFIDLinkData = (data) => {
    return new Promise((resolve, reject) => {
        try {
            const request = new db.sql.Request();
                        request.input('QR', db.sql.NVarChar(100), data.QR);
                        request.input('Warehouse', db.sql.NVarChar(50), data.Warehouse);
                        request.input('ItemCode', db.sql.NVarChar(50), data.ItemCode);
                        request.input('Lot', db.sql.NVarChar(50), data.Lot);
                        request.input('QR_Loc', db.sql.NVarChar(50), data.QR_Loc);
                        request.input('SerialNo', db.sql.NVarChar(50), data.SerialNo);
                        request.input('OutboundNo', db.sql.NVarChar(50), data.OutboundNo);
                        request.input('ZoneID', db.sql.NVarChar(50), data.ZoneID);
                        request.input('Project', db.sql.NVarChar(100), data.Project);
                        request.input('ItemDescription', db.sql.NVarChar(100), data.ItemDescription);
                        request.input('AvalStatus', db.sql.NVarChar(50), data.AvalStatus);
                        request.input('FromDate', db.sql.NVarChar(50), data.FromDate);
                        request.input('ToDate', db.sql.NVarChar(50), data.ToDate);

            // Execute the stored procedure
            request.execute('dbo.Sp_GetProductRFIDLinkData', (err, result) => {
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