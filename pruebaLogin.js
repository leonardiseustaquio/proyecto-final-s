const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function pruebaLogin() {
  const driver = await new Builder().forBrowser('chrome').build();
  
  await driver.get('file://' + __dirname + '/login.html');
await tomarCaptura(driver, 'captura4_inicio_login.png');

await driver.findElement(By.id('correo')).sendKeys('ana@gmail.com');
await driver.findElement(By.id('contrasena')).sendKeys('clave123');
await tomarCaptura(driver, 'captura5_datos_login.png');

await driver.findElement(By.id('btn-login')).click();
await driver.wait(until.elementLocated(By.id('mensaje-login')), 3000);
await tomarCaptura(driver, 'captura6_login_exitoso.png');
 

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


module.exports = { pruebaLogin };