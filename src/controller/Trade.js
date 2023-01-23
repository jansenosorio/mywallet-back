import db from "../config/database.js   ";

export async function IncomeExpenses(req, res) {
  const { email, value, type, description } = req.body;
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed).toLocaleDateString("pt-BR");
  const newToday = today.slice(0, 5)

  const newValue = Number(value).toFixed(2)
 

  try {
    const { idUser } = await db.collection("session").find({ token });

    await db.collection("IncExp").insertOne({
      date: newToday,
      value: newValue,
      type: type,
      description: description,
      idUser: email,
    });

    res.status(201).send(`Nova(o) ${type} cadastrado com sucesso.`);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function userResume(req, res) {

    try {
        const body = await db.collection('IncExp').find().toArray()
        res.send(body)
    } catch (error) {   
        res.send(500).status(error)
    }

}
