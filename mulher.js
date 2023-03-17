const express = require('express')
const router = express.Router()
const app = express()

app.use(express.json())

const PORTA = 3333

function mostraMulher(req, res) {
  res.json({
    nome: 'Simara Conceição',
    imagem: 'github.com/simaraconceicao.png',
    minibio: 'Desenvolvedora, instrutora e criadora de conteúdo',
  }
)}

app.use(router.get('/mulher', mostraMulher))

function mostraPorta() {
  console.log(`Servidor criado e rodando na porta ${PORTA}`)
}

app.listen(PORTA, mostraPorta)
