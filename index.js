const log = require('loglevel');
function funcion() {
  console.log("Ejemplo")
}
function VanessaAguilar() {console.log('Vanessa Aguilar')};
const main = () => {
  console.log('Inicio')
  log.warn("unreasonably simple");
  funcion();
  VanessaAguilar();
}
main();
