import request from 'supertest'
import { StatusCodes } from 'http-status-codes'
import app from '../WidgetApp'

describe('Index endpoint', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get('/health')
    expect(response.statusCode).toEqual(StatusCodes.OK)
  })

  it('should return a widget id', async () => {
    await request(app)
      .get('/widgets/100')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(StatusCodes.OK)
  })
})
