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

import { client_dev, client_prod, port } from './config/config';
import { socketConnection } from './socket';

app.set("port", port)

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
    app.use(cors({
        origin: `${client_dev}`,
        credentials: true
    }))
} else {
    app.use(morgan('combined'))
    app.use(cors({
        origin: `${client_prod}`,
        credentials: true
    }))
}
app.use(express.urlencoded({ extended: false, limit: '10mb' }))
app.use(express.json({ limit: '10mb' }))

app.use(userRoute)
app.use(messageRoute)

httpServer.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
})

let io;

if (process.env.NODE_ENV !== 'production') {
    io = new Server(httpServer, {
        cors: {
            origin: `${client_dev}`
        }
    })
} else {
    io = new Server(httpServer, {
        cors: {
            origin: `${client_prod}`
        }
    })
}
socketConnection(io)
