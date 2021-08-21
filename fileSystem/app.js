const path = require('path');
const pathFile = path.resolve(__dirname, 'teste.json');
const write = require('./modules/write');
const read = require('./modules/read');
const { listenerCount } = require('events');

const people = [
  {nome: 'João'},
  {nome: 'Maria'},
  {nome: 'Edu'},
  {nome: 'Luiza'},
];

const json = JSON.stringify(people, '', 2);

// write(pathFile, json)

const myReadFile = async (pathF) => {
  const data = await read(pathF);
  render(data);
}

function render(data) {
  const arr = JSON.parse(data)
  arr.forEach(v => console.log(v))

}

// const fileReaded = myReadFile(pathFile).then(data => console.log(data))
myReadFile(pathFile)

