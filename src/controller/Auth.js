import bcrypt from 'bcrypt'
import db from "../config/database.js";
import { uuid } from 'uuidv4'


//Function to controll Signup

export async function SingUp (req, res) {
    const { name, email, password } = req.body

    const passwordHashed = bcrypt.hashSync(password, 10)

    try {
        await db.collection('users').insertOne({ name, email, password: passwordHashed })
        res.status(201).send("OK")
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//Function to controll Login

export async function Login ( req, res ) {
    const { email, password } = req.body
    
    try {
        const userCheck = await db.collection('users').findOne({ email })
        
        if (!userCheck) return res.status(400).send('Usuário e/ou senha inválidos.')

        const isCorrectPassword = bcrypt.compareSync(password, userCheck.password)

        if(!isCorrectPassword) return res.status(400).send('Usuário e/ou senha inválidos.')

        const token = uuid()

        await db.collection('session').insertOne({idUser: userCheck._id, token})

        res.status(200).send({
            token,
            name: userCheck.name
        })

    } catch (error) {
        res.status(500).send(error.message)
    }
}