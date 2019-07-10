const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
    it('has home page', () => {
        return request(app)
            .get('/')
            .then(res => {
                expect(res.text).toEqual(expect.stringContaining('hi'));
            });
    }); 
});
