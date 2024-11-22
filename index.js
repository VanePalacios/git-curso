const log = require('loglevel');
function funcion() {
  console.log("Hola (commit de chago)")
}
const main = () => {
  console.log('Inicio')
  log.warn("unreasonably simple");
  funcion()
}
main();
