const log = require('loglevel');
function funcion() {
  console.log("Hola (commit)")
}
const main = () => {
  console.log('Inicio 23/11/2024')
  log.warn("unreasonably simple");
  funcion()
}
main();
