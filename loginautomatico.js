const{ Builder, By, Key} = require('selenium-webdriver');

(async () => {
   let driver = await new Builder().forBrowser('chrome').build(); //Cria e inicializa o webdriver no chrome
   for (let i = 0; i<10; i++){
   await driver.executeScript(`window.open('https://www.github.com/login', '_blank');`);

    //Espera a nova aba abrir e executar para tornar ativa
    var tabs = await driver.getAllWindowHandles();
    await driver.switchTo().window(tabs[tabs.length -1]);

    await driver.findElement(By.id('login_field')).sendKeys('brnaveia2018@gmail.com');
    await driver.findElement(By.id('password')).sendKeys('#IOdC13102007' , Key.RETURN);
    Console.log('login realizado no Github');

}
})();