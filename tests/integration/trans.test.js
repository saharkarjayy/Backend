// tests/integration/trans.test.js
const request = require('supertest');
const app = require('../../src/index'); // Your main app

describe('Transaction API Endpoints', () => {
  test('POST /api/trans/recentTranscationToday should return transaction data', async () => {
    const response = await request(app)
      .post('/api/trans/recentTranscationToday')
      .send({});
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('success');
    expect(response.body).toHaveProperty('message');
  });
});