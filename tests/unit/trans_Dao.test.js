// tests/unit/trans_Dao.test.js
jest.mock('../../src/db/dbConn');
const transDao = require('../../src/dao/trans_Dao');
const db = require('../../src/db/dbConn');

describe('Transaction DAO', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('recentTranscationToday should return transaction data on success', async () => {
    // Setup the mock to return success
    const mockExecute = jest.fn((procedure, callback) => {
      callback(null, { recordsets: [[{ id: 1, transaction: 'Test' }]] });
    });

    db.sql.Request.mockImplementation(() => ({
      execute: mockExecute
    }));

    const result = await transDao.recentTranscationToday({});
    
    expect(mockExecute).toHaveBeenCalledWith('dbo.Sp_Rep_WEB_RecentTransactionToday', expect.any(Function));
    expect(result).toEqual({
      status: 1,
      success: true,
      error: 0,
      message: [{ id: 1, transaction: 'Test' }]
    });
  });

  test('recentTranscationToday should handle SQL errors', async () => {
    // Setup the mock to return an error
    const sqlError = new Error('SQL Error');
    const mockExecute = jest.fn((procedure, callback) => {
      callback(sqlError, null);
    });

    db.sql.Request.mockImplementation(() => ({
      execute: mockExecute
    }));

    const result = await transDao.recentTranscationToday({});
    
    expect(result).toEqual({
      status: 0,
      success: false,
      error: 500,
      message: 'SQL Error'
    });
  });
});