const log = require('loglevel');
function funcion() {
  console.log("Hola (commit)")
}
const main = () => {
  console.log('Inicio')
  log.warn("unreasonably simple");
  funcion()
}
main();
