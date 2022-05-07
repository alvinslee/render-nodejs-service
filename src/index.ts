import app from './server/WidgetApp'
import { PORT, HOST } from './constants'

app.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 server started at http://${HOST}:${PORT}`)
})
