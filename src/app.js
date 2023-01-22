import express from "express";
import cors from "cors"
import authRouter from './routes/AuthRoutes.js'
import tradeRouter from "./routes/TradeRoutes.js";

//Express Config

const server = express()
server.use(cors())
server.use(express.json())

server.use([authRouter, tradeRouter])

const PORT = 5000

server.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))