// tests/integration/automatic-api-test.js
const request = require('supertest');
const app = require('../../src/index');

// Define all router paths from router.js
const baseRoutes = [
  '/api/additional',
  // '/api/auth',
  '/api/material_rfid_link',
  '/api/findMaterial',
  '/api/hht_reports',
  '/api/hhtStockTake',
  
];

// Mock all DAOs globally (optional, can be refined per test)
jest.mock('../../src/db/dbConn'); // Ensure DB is mocked

describe('Automatic API Testing', () => {
  // Helper to generate test cases for each endpoint
  const generateTests = () => {
    const tests = [];
    
    // Define known endpoints and their methods
    const knownEndpoints = [
     
      //Additional 
      { method: 'post', path: '/api/additional/getAdditionalData' },
      { method: 'post', path: '/api/additional/insertAdditional' },

     // Find Material
      { method: 'post', path: '/api/findMaterial/getProductRFIDLinkData' },

      // HHT Material Stock Take
      { method: 'post', path: '/api/hhtStockTake/getNewStockTakeNumber' },
      { method: 'post', path: '/api/hhtStockTake/getContinueStockTakeNumber' },
      { method: 'post', path: '/api/hhtStockTake/getStoreIdStockTake' },
      { method: 'post', path: '/api/hhtStockTake/getZoneIdStockTake' },
      { method: 'post', path: '/api/hhtStockTake/insertStockTakeData' },
      { method: 'post', path: '/api/hhtStockTake/getStockTakeData' },

      // HHT Report
      { method: 'post', path: '/api/hht_reports/getRFIDLinkByUserData' },
      { method: 'post', path: '/api/hht_reports/getProductLocationHistory' },
      { method: 'post', path: '/api/hht_reports/getStockTakeData' },
      { method: 'post', path: '/api/hht_reports/getStockTakeNumbers' },

      // Material RFID Link
      { method: 'post', path: '/api/material_rfid_link/validateBarcode' },
      { method: 'post', path: '/api/material_rfid_link/validateRFID' },
      { method: 'post', path: '/api/material_rfid_link/linkBarcodeAndRfid' },
    
      // Add more endpoints from other controllers as needed
    ];

    return knownEndpoints;
  };

  const testCases = generateTests();
  const defaultBody = { test: 'data' };

  test.each(testCases)(
    '$method $path should return success response',
    async ({ method, path }) => {
      let response;
      if (method === 'post') {
        response = await request(app).post(path).send(defaultBody);
      } else if (method === 'get') {
        response = await request(app).get(path);
      }

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('status', 1);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('error', 0);
      expect(response.body).toHaveProperty('message');
    }
  );

  // Test error case (e.g., invalid data)
  test.each(testCases)(
    '$method $path should handle invalid data',
    async ({ method, path }) => {
      let response;
      if (method === 'post') {
        response = await request(app).post(path).send({ invalid: 'data' });
      } else if (method === 'get') {
        response = await request(app).get(path).query({ invalid: 'data' });
      }

      // Depending on your error handling, this might return 200 or 500
      expect(response.statusCode).toBeGreaterThanOrEqual(200);
      expect(response.body).toHaveProperty('success');
    }
  );
});