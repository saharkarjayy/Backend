// tests/integration/trans_controller.test.js
const request = require('supertest');
const app = require('../../src/index');
const transDao = require('../../src/dao/trans_Dao');

// Mock the DAO layer
jest.mock('../../src/dao/trans_Dao');

describe('Transaction Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('POST /api/trans/recentTranscationToday should return transaction data', async () => {
    // Setup the mock
    transDao.recentTranscationToday.mockResolvedValue({
      status: 1,
      success: true,
      error: 0,
      message: [{ id: 1, transaction: 'Test' }]
    });

    const response = await request(app)
      .post('/api/trans/recentTranscationToday')
      .send({});
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: 1,
      success: true,
      error: 0,
      message: [{ id: 1, transaction: 'Test' }]
    });
    expect(transDao.recentTranscationToday).toHaveBeenCalledWith({});
  });

  test('POST /api/trans/recentTranscationToday should handle errors', async () => {
    // Setup the mock to throw an error
    transDao.recentTranscationToday.mockRejectedValue(new Error('Test error'));

    const response = await request(app)
      .post('/api/trans/recentTranscationToday')
      .send({});
    
    expect(response.statusCode).toBe(500);
  });
});