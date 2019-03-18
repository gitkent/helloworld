const request = require('supertest');
const testapp = require('../app');
const req = request(testapp); 

//==================== API test ====================

/**
 * Testing / with Hello World!
 */
describe('GET /', function () {
    it('respond with string', function (done) {
						req
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /text/)
            .expect(200, done);
    });
});

/**
 * Testing /status with JSON payload
 */
describe('GET /status', function () {
    it('respond with json payload', function (done) {
            req
            .get('/status')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
