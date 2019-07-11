const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {

    it('has home page', () => {
        return request(app)
            .get('/')
            .then(res => {
                expect(res.text).toEqual(expect.stringContaining('HWEEL'));
            });
    }); 

    it('routes red correctly', () => {
        return request(app)
            .get('/api/v1/colors/red')
            .then(res => {
                expect(res.text).toEqual(expect.stringContaining('red'));
            });
    }); 

    it('routes blue correctly', () => {
        return request(app)
            .get('/api/v1/colors/blue')
            .then(res => {
                expect(res.text).toEqual(expect.stringContaining('blue'));
            });
    }); 

    it('routes green correctly', () => {
        return request(app)
            .get('/api/v1/colors/green')
            .then(res => {
                expect(res.text).toEqual(expect.stringContaining('green'));
            });
    }); 
});
