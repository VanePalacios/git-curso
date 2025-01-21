const log = require('loglevel');
function funcion() {
  console.log("Hola (commit)")
}
const main = () => {
  console.log('Inicio 21/01/2025')
  log.warn("unreasonably simple");
  funcion()
}
main();
