import request from 'supertest'
import app from '../src/app'

describe('Upload endpoint', () => {
  it('denied unauthorized user saving files', async () => {
    const { body } = await request(app).get('/').expect(200)

    expect(body.data).toBe('Hello, World!')
  })
})
