const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function pruebaRegistro() {
  const driver = await new Builder().forBrowser('chrome').build();
  
  await driver.get('file://' + __dirname + '/registro.html');
await tomarCaptura(driver, 'captura1_inicio_registro.png');

await driver.findElement(By.id('nombre')).sendKeys('Ana Torres');
await driver.findElement(By.id('correo')).sendKeys('ana@gmail.com');
await driver.findElement(By.id('contrasena')).sendKeys('clave123');
await tomarCaptura(driver, 'captura2_datos_registro.png');

await driver.findElement(By.id('btn-registrarse')).click();
await driver.wait(until.elementLocated(By.id('mensaje-exito')), 3000);
await tomarCaptura(driver, 'captura3_registro_exitoso.png');

  {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Espera 2 segundos
    }
  {
    await driver.quit();
  }
}
async function tomarCaptura(driver, nombreArchivo) {
  const fs = require('fs');
  const imagen = await driver.takeScreenshot();
  fs.writeFileSync(nombreArchivo, imagen, 'base64');
}


module.exports = { pruebaRegistro };