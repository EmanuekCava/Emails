import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'

dotenv.config();
const app = express()
import './database/databases/mongo'

import userRoute from './routes/user.routes'
import messageRoute from './routes/message.routes'

app.set("port", process.env.PORT)

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(userRoute)
app.use(messageRoute)

app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
})

