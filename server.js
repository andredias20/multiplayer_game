import express from 'express'
import http from 'http'
import createGame from './public/game.js'
import { Server } from "socket.io";

const app = express()
const server = http.createServer(app)
const sockets = new Server(server)

app.use(express.static('public'))

const game = createGame()

game.subscribe((command) => {
    console.log(`Emmiting ${command.type}`)
    sockets.emit(command.type, command)
})

sockets.on('connection', (socket) => {
    const playerId = socket.id
    console.log(`> Player connected: ${playerId}`);

    game.addPlayer({playerId})

    socket.emit('setup', game.state)

    socket.on('disconnect', () => {
        game.removePlayer({playerId: playerId})
        console.log(`> Player disconected: ${playerId}`)
    }) 
    
    socket.on('add-player', (command) => {
        game.addPlayer(command)
    })

})


server.listen(3000, () => {
    console.log(`> Server listening on port: 3000`)
})