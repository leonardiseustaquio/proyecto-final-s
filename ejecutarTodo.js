const { pruebaRegistro } = require('./pruebaRegistro');
const { pruebaLogin } = require('./pruebaLogin');

(async () => {
  console.log(' Iniciando pruebas automatizadas...\n');

  await pruebaRegistro();
  await pruebaLogin();

  console.log('\n Todas las pruebas finalizadas.');
})();