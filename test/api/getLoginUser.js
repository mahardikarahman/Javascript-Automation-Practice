const request = require('supertest')
const url = require('../../env')

describe('Get Request Login', () => {
    it('Find User Login', async () => {
        const response = request (url())
        .get('/user/login')

        console.log((await response).status)
        console.log((await response).body)

    })
})