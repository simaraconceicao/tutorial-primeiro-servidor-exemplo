const express = require('express')
const router = express.Router()
const app = express()

app.use(express.json())

const PORTA = 3333

function mostraOla(req, res) {
  res.send("Olá, mundo!")
}

app.use(router.get('/ola', mostraOla))

function mostraPorta() {
  console.log(`Servidor criado e rodando na porta ${PORTA}`)
}

app.listen(PORTA, mostraPorta)


