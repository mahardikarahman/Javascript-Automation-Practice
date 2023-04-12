const { expect } = require('chai')
const request = require('supertest')
const url = require('../../env')

describe('Chai Example', () => {
 
    const response = request (url())
    .post('/user')
    .send({
        "id": 12242,
        "username": "acumalakasw",
        "firstName": "acuw",
        "lastName": "malakaw",
        "email": "acumalak3a@mailsac.com",
        "password": "1213257",
        "phone": "0826563739299",
        "userStatus": 1

    })
   
    it('response status equal to 200', async () => {
        //cek response sama dengan 200
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async () => {
        //expect body response terdapat value
        expect((await response).body).to.haveOwnProperty('clearmessage')
    })

    //reporting mochawesome
    
    
})