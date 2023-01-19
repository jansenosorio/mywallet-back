import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import { MongoClient } from "mongodb";

dotenv.config()

// MongoDB config

const mongoClient = new MongoClient(process.env.DATABASE_URL)
let db;

try {
    await mongoClient.connect()
    db = mongoClient.db()
    console.log("Banco de dados rodando lisinho.")
  } catch (error) {
    console.error(error)
    console.log('Houve algum problema na conexão com BD')
  }

//Express Config

const app = express()
app.use(cors())
app.use(express.json())




const PORT = 5000

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`))