import express from "express";
import cors from "cors"
import authRouter from './routes/AuthRoutes.js'

//Express Config

const server = express()
server.use(cors())
server.use(express.json())

server.use(authRouter)

const PORT = 5000

server.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))