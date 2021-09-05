const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

function meuMiddleware(req, res, next) {
  console.log();
  console.log('Passei no middleware');
  console.log();
  next();
}

// dados da requisição passam do primeiro até o ultimo middleware
// home
route.get('/', meuMiddleware ,homeController.paginaInicial, (req, res, next) => {
  console.log('Ainda estou aqui...')
});
route.post('/', homeController.trataPost);

//contato
route.get('/contato', contatoController.paginaInicial)



module.exports = route