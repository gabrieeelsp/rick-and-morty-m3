const server = require('../src/server');
const request = require('supertest');

// beforeAll(async () => {
//     await app.listen(3001);
// })

// afterAll(async () => {
//     await app.close();
// })


describe( 'GET /rickandmorty/character/:id', () => {
    it( 'Responde con status: 200', async () => {
        const response = await request(server).get('/rickandmorty/character/1');
        console.log(response.statusCode)
        expect(response.statusCode).toEqual(200);
    })
})


