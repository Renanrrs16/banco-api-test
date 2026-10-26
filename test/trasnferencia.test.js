const request = require('supertest');
const{expect} = require('chai');
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao');
const postTransferencias = require('../fixture/postTransferencias.json');

describe('transferencias', () => {
    describe('POST /transferencias', () => {
       let token;
        beforeEach(async () => {
            token = await obterToken('julio.lima', '123456');
        })

        it('Deve retornar sucesso com 201 quando o valor da transfereinca for igaul ou acima de R$10,00', async () => {
            const bodyTransferencia = {...postTransferencias}
    
            const resposta = await request(process.env.Base_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send(bodyTransferencia)

            expect(resposta.status).to.equal(201);
            console.log(resposta.body)
         })
        it('Deve retornar falha com 422 quando o valor da transfereinca for abaixo de R$10,00', async () => {
            const bodyTransferencia = {...postTransferencias}
            bodyTransferencia.valor = 7;

            const resposta = await request(process.env.Base_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send(bodyTransferencia)

            expect(resposta.status).to.equal(422);
        })
    })

})