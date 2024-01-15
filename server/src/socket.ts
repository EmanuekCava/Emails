import { Server, Socket } from "socket.io";

export const socketConnection = (io: Server) => {

    io.on('connection', (socket: Socket) => {
        
        socket.on('emailSent', (data) => {
            io.emit("messages", data)
        })

    })

}