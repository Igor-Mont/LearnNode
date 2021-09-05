exports.paginaInicial = (req, res, next) => {
  console.log('Respondendo...')
  res.render('index');
  next()
}

exports.trataPost = (req, res) => {
  res.send('Sou a nova rota POST')
}