const request = require('supertest');
const{expect} = require('chai');
require('dotenv').config();
const postLogin = require('../fixture/postLogin.json');

describe('Login Tests', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com token e estring quando usar credenciais válidas', async() => {
            const bodyLogin = {...postLogin}
            const resposta = await request(process.env.Base_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)
             
            console.log(resposta.status);
            console.log(resposta.body);

            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');  
        })
    })
})