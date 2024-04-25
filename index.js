const log = require('loglevel');
function funcion() {
  console.log("Ejemplo")
}
const main = () => {
  console.log('Inicio')
  log.warn("unreasonably simple");
  funcion()
}
main();
