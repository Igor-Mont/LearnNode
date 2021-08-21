const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<form action="/" method="POST"><input type="text" name="name"><button>Enviar</button></form>');
});

app.post('/', (req, res) => {
  res.send('Formulário recebido');
})

app.get('/contact', (req, res) => {
  res.send('Contact')
})

app.listen(3333, () => {
  console.log('Executando na porta 3333');
  console.log('🎈http://localhost:3333');
});
