const http = require('http')
const express = require('express')
const path = require('path')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.json())
app.use(express.static(publicDirectoryPath))

io.on('connection', () => {
  console.log('New Web Socket connection')
})

server.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})