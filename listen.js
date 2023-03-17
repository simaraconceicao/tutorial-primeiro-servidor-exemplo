const express = require('express')
const app = express()

app.use(express.json())

const PORTA = 3333
app.listen(PORTA, mostraPorta)

function mostraPorta() {
  console.log(`Servidor criado e rodando na porta ${PORTA}`)
}

