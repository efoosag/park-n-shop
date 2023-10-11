const http = require('http')

const dotenv = require('dotenv')
dotenv.config()

const app = require('./app');

const {mongoConnect } = require('./services/mongo');

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect()
  server.listen(PORT, () => {
    console.log('Server is now working')
  })
}

startServer()

