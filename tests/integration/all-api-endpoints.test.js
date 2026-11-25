// tests/integration/all-api-endpoints.test.js
const request = require('supertest');
const app = require('../../src/index');
const additionalDao = require('../../src/dao/additional_dao');
const findMaterialDao = require('../../src/dao/findMaterial_dao');
const hhtMaterialStockTakeDao = require('../../src/dao/hht_materialStockTake_Dao');
const hhtReportsDao = require('../../src/dao/hht_reports_dao');
const materialRfidLinkDao = require('../../src/dao/material_rfid_link_dao');


// Mock the database globally
jest.mock('../../src/db/dbConn');

// Explicitly mock DAO modules with their functions


jest.mock('../../src/dao/additional_dao', () => ({
  getAdditionalData: jest.fn(),
  insertAdditional: jest.fn(),
  // Add other additional_dao functions if they exist
}));

jest.mock('../../src/dao/findMaterial_dao', () => ({
  getProductRFIDLinkData: jest.fn(),
  
  // Add other findMaterial_dao functions if they exist
}));

jest.mock('../../src/dao/hht_materialStockTake_Dao', () => ({
  getNewStockTakeNumber: jest.fn(),
  getContinueStockTakeNumber: jest.fn(),
  getStoreIdStockTake: jest.fn(),
  getZoneIdStockTake: jest.fn(),
  insertStockTakeData: jest.fn(),
  getStockTakeData: jest.fn(),
  // Add other hht_materialStockTake_Dao functions if they exist
}));

jest.mock('../../src/dao/hht_reports_dao', () => ({
  getRFIDLinkByUserData: jest.fn(),
  getProductLocationHistory: jest.fn(),
  getStockTakeData: jest.fn(),
  getStockTakeNumbers: jest.fn(),
  // Add other hht_reports_dao functions if they exist
}));

jest.mock('../../src/dao/material_rfid_link_dao', () => ({
  validateBarcode: jest.fn(),
  validateRFID: jest.fn(),
  linkBarcodeAndRfid: jest.fn(),
  // Add other material_rfid_link_dao functions if they exist
  }));


describe('All API Endpoints', () => {
  const endpoints = [
   
    // ======================== THIS IS TO API DEFINE(Additional) ===========================
    {
      method: 'post',
      url: '/api/additional/getAdditionalData',
      mockFn: additionalDao.getAdditionalData,
      mockReturn: { status: 1, success: true, error: 0, message: [{ id: 1, transaction: 'Test' }] },
      body: {},
      expectedStatus: 200,
    },
    {
      method: 'post',
      url: '/api/additional/insertAdditional',
      mockFn: additionalDao.insertAdditional,
      mockReturn: { status: 1, success: true, error: 0, message: [{ id: 1, transaction: 'Test' }] },
      body: {},
      expectedStatus: 200,
    },
    // ======================== THIS IS TO API DEFINE(Find Material) ===========================
    {
      method: 'post',
      url: '/api/findMaterial/getProductRFIDLinkData',
      mockFn: findMaterialDao.getProductRFIDLinkData,
      mockReturn: { status: 1, success: true, error: 0, message: [{ id: 1, transaction: 'Test' }] },
      body: {},
      expectedStatus: 200,
    },

    // ======================== THIS IS TO API DEFINE(HHT Material Stock Take) ===========================
    {
      method: 'post',
      url: '/api/hhtStockTake/getNewStockTakeNumber',
      mockFn: hhtMaterialStockTakeDao.getNewStockTakeNumber,
      mockReturn: { status: 1, success: true, error: 0, message: [{ id: 1, transaction: 'Test' }] },
      body: {},
      expectedStatus: 200,
    },
    {
      method: 'post',
      url: '/api/hhtStockTake/getContinueStockTakeNumber',
      mockFn: hhtMaterialStockTakeDao.getContinueStockTakeNumber,
      mockReturn: { status: 1, success: true, error: 0, message: [{ id: 1, transaction: 'Test' }] },
      body: {},
      expectedStatus: 200,
    },
    {
      method: 'post',
      url: '/api/hhtStockTake/getStoreIdStockTake',
      mockFn: hhtMaterialStockTakeDao.getStoreIdStockTake,
      mockReturn: { status: 1, success: true, error: 0, message: [{ id: 1, transaction: 'Test' }] },
      body: {},
      expectedStatus: 200,
    },
    {
      method: 'post',
      url: '/api/hhtStockTake/getZoneIdStockTake',
      mockFn: hhtMaterialStockTakeDao.getZoneIdStockTake,
      mockReturn: { status: 1, success: true, error: 0, message: [{ id: 1, transaction: 'Test' }] },
      body: {},
      expectedStatus: 200,
    }, 
    {
      method: 'post',
      url: '/api/hhtStockTake/insertStockTakeData',
      mockFn: hhtMaterialStockTakeDao.insertStockTakeData,
      mockReturn: { status: 1, success: true, error: 0, message: [{ id: 1, transaction: 'Test' }] },
      body: {},
      expectedStatus: 200,
    },
    {
      method: 'post',
      url: '/api/hhtStockTake/getStockTakeData',
      mockFn: hhtMaterialStockTakeDao.getStockTakeData,
      mockReturn: { status: 1, success: true, error: 0, message : [{ id: 1, transaction: 'Test' }] },
      body: {},
      expectedStatus: 200,
      },

      // ======================== THIS IS TO API DEFINE(HHT Report) ===========================
    {
      method: 'post',
      url: '/api/hht_reports/getRFIDLinkByUserData',
      mockFn: hhtReportsDao.getRFIDLinkByUserData,
      mockReturn: { status: 1, success: true, error: 0, message: [{ id: 1, transaction: 'Test' }] },
      body: {},
      expectedStatus: 200,
    },
    {
      method: 'post',
      url: '/api/hht_reports/getProductLocationHistory',
      mockFn: hhtReportsDao.getProductLocationHistory,
      mockReturn: { status: 1, success: true, error: 0, message: [{ id: 1, transaction: 'Test' }] },
      body: {},
      expectedStatus: 200,
    }, {
      method: 'post',
      url: '/api/hht_reports/getStockTakeData',
      mockFn: hhtReportsDao.getStockTakeData,
      mockReturn: { status: 1, success: true, error: 0, message: [{ id: 1, transaction: 'Test' }] },
      body: {},
      expectedStatus: 200,
    }, {
      method: 'post',
      url: '/api/hht_reports/getStockTakeNumbers',
      mockFn: hhtReportsDao.getStockTakeNumbers,
      mockReturn: { status: 1, success: true, error: 0, message: [{ id: 1, transaction: 'Test' }] },
      body: {},
      expectedStatus: 200,
    },

    // ======================== THIS IS TO API DEFINE(HHT Material RFID Link Dao) ===========================
    {
      method: 'post',
      url: '/api/material_rfid_link/validateBarcode',
      mockFn: materialRfidLinkDao.validateBarcode,
      mockReturn: { status: 1, success: true, error: 0, message: [{ id: 1, transaction: 'Test' }] },
      body: {},
      expectedStatus: 200,
    },
    {
      method: 'post',
      url: '/api/material_rfid_link/validateRFID',
      mockFn: materialRfidLinkDao.validateRFID,
      mockReturn: { status: 1, success: true, error: 0, message: [{ id: 1, transaction: 'Test' }] },
      body: {},
      expectedStatus: 200,
    },{
      method: 'post',
      url: '/api/material_rfid_link/linkBarcodeAndRfid',
      mockFn: materialRfidLinkDao.linkBarcodeAndRfid,
      mockReturn: { status: 1, success: true, error: 0, message: [{ id: 1, transaction: 'Test' }] },
      body: {},
      expectedStatus: 200,
    },
    





    

      // ======================== THIS IS TO API DEFINE(Auth) ===========================
      // {
      //   method: 'post',
      //   url: '/api/auth/login',
      //   mockFn: authDao.login,
      //   mockReturn: { status: 1, success: true, error: 0, message: [{ id: 1, transaction: 'Test' }] },
      //   body: {},
      //   expectedStatus: 200,
      // },

      
  ];

  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock calls between tests
  });

  test.each(endpoints)(
    '$method $url should return $expectedStatus with mocked data',
    async ({ method, url, mockFn, mockReturn, body, expectedStatus }) => {
      if (mockFn) {
        mockFn.mockResolvedValue(mockReturn); // Now this works because mockFn is a Jest mock
      }

      let response;
      if (method === 'post') {
        response = await request(app).post(url).send(body);
      } else if (method === 'get') {
        response = await request(app).get(url);
      }

      expect(response.statusCode).toBe(expectedStatus);
      expect(response.body).toMatchObject(mockReturn);
      if (mockFn) {
        expect(mockFn).toHaveBeenCalled();
      }
    }
  );

  test.each(endpoints)(
    '$method $url should handle errors',
    async ({ method, url, mockFn }) => {
      if (mockFn) {
        mockFn.mockRejectedValue(new Error('Database error'));
      }

      let response;
      if (method === 'post') {
        response = await request(app).post(url).send({});
      } else if (method === 'get') {
        response = await request(app).get(url);
      }

      expect(response.statusCode).toBe(500);
      expect(response.body.success).toBe(false);
      expect(response.body.error).toBe(1002);
    }
  );
});