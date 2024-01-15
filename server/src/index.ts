import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import http from 'http';
import { Server } from "socket.io";

dotenv.config();
const app = express()
import './database/databases/mongo'

import userRoute from './routes/user.routes'
import messageRoute from './routes/message.routes'

const httpServer = http.createServer(app)

import { port } from './config/config';
import { socketConnection } from './socket';

app.set("port", port)

if(process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
} else {
    app.use(morgan('combined'))
}
app.use(cors())
app.use(express.urlencoded({ extended: false, limit: '10mb' }))
app.use(express.json({ limit: '10mb' }))

app.use(userRoute)
app.use(messageRoute)

httpServer.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
})

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000"
    }
})
socketConnection(io)
