const app = require('../src/server/server.js');
const supertest = require('supertest');
const request = supertest(app);

//https://zellwk.com/blog/endpoint-testing/
test('Test the endpoint', async done => {
    const res = await request.get('/data')
    expect(res.status).toBe(200)
    done()
})