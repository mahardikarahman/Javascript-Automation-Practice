const request = require('supertest')
const url = require('../../env')
const DATA = require('../../data/userData.js')

describe('Pet Create User', () => {
    it('Create User', async () => {
        const response = request (url())
        .post('/user')
        .send(DATA.CREATE_USER_DATA)

        console.log((await response).status)
        console.log((await response).body)

    })
})