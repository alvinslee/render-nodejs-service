import express, { Express } from 'express'
import bodyParser from 'body-parser'

class BackendApp {
  app: Express

  constructor() {
    this.app = express()
    this.routes()
  }

  routes() {
    // Parses incoming requests data (https://github.com/expressjs/body-parser)
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))

    this.app.get('/health', (_, response) => {
      response.statusCode = 200
      response.json({ status: 'up' })
    })

    this.app.get('/widgets/:id', (request, response) => {
      response.statusCode = 200
      response.json({ widget: request.params.id })
    })
  }
}

export default new BackendApp().app
