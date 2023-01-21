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

export default db