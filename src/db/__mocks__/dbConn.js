// src/db/__mocks__/dbConn.js
const mockRequest = {
  input: jest.fn().mockReturnThis(),
  execute: jest.fn().mockImplementation((procedure, callback) => {
      if (callback) {
          callback(null, { recordsets: [[{ id: 1, name: 'Test Data' }]] });
      }
      return Promise.resolve({ recordsets: [[{ id: 1, name: 'Test Data' }]] });
  })
};

const mockSql = {
  Request: jest.fn(() => mockRequest),
  connect: jest.fn().mockResolvedValue(true)
};

module.exports = {
  sql: mockSql,
  connection: mockRequest,
  connectToDatabase: jest.fn().mockResolvedValue(true)
};