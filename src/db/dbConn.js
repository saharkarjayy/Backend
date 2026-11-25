



const sql = require('mssql');
require('dotenv').config();

/**
|--------------------------------------------------
|   user: process.env.DB_USER || 'Tlg_IOT_Data' ,                        // SQL Server username
    password: process.env.DB_PASS || '$4rv4r@wr!tenl!y' ,             // SQL Server password
    server: process.env.DB_HOST ||  '172.16.125.209' ,          // Server IP or hostname
    port:  1433,                        // Port number (default is 1433)
    database: process.env.DB_NAME ||'Tlg_IOT_Data' ,  
|--------------------------------------------------
*/
const config = {
    user: 'sa' ,                        // SQL Server username
    password: 'bdspl@123' ,             // SQL Server password
    server: '3.7.231.230' ,          // Server IP or hostname
    port:  1433,                        // Port number (default is 1433)
    database: "IMS_LT",                // Database name
    options: {
        encrypt: false, 
        trustServerCertificate: true,

    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

let connection;

async function connectToDatabase() {
    try {
        await sql.connect(config);
        connection = new sql.Request();
        console.log('Connected to SQL Server');
        module.exports.connection = connection;
    } catch (err) {
        console.error('Error connecting: ', err);
    }
}

// Only connect to the database if we're not in a test environment
if (process.env.NODE_ENV !== 'test') {
    connectToDatabase();
}

module.exports = {
    sql,
    connection,
    connectToDatabase // Export the function to allow manual connection in non-test environments
};