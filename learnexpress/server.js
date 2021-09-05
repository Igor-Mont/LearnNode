const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware')

// query string: começa com ? e adiciona com &
// params: parametros da url, pdoendo ser opcional 
// ? === opcional

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(routes);

app.listen(3333, () => {
  console.log('Executando na porta 3333');
  console.log('🎈http://localhost:3333');
});
