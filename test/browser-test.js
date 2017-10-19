let webdriver = require('selenium-webdriver');

let capabilities = {
    'browserName' : 'chrome',
    'browserstack.user' : 'arifrachim1',
    'browserstack.key' : 'Ui8njXZfDtubZUvAikox',
    'browserstack.debug' : 'true',
    'build' : 'First build'
};

var driver = new webdriver.Builder().usingServer('http://hub-cloud.browserstack.com/wd/hub').
    withCapabilities(capabilities).build();

driver.get('http://yallajs.io/benchmark.html');
driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack');
driver.findElement(webdriver.By.name('btnK')).click();

driver.getTitle().then(function(title){
    console.log(title);
});

driver.quit();