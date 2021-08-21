const fs = require('fs').promises;

module.exports = (path, data) => {
  fs.writeFile(path, data);
}
//                         *encoding padrão utf-8
//     flag: w (padrão) === apaga tudo que tem no arquivo e reescreve com o texto mandado
//     flag: a === adiciona o texto mandado
// \n para pular linha


