const puppet = require('puppeteer');

const username = 'YOUR USERNAME HERE'
const password = 'YOUR PASSWORD HERE'
const message = 'mensagem automatica...'
const interval = 5000 //tempo entre cada mensagem enviada, em ms.

(async () => {
  const browser = await puppet.launch({headless: false});
  const page = await browser.newPage();

  await page.goto('https://discordapp.com/channels/558087780018683916/695269352219344966');

  await page.focus('.inputDefault-_djjkz')
  await page.keyboard.type('vinicius.bazanella1@gmail.com')
  await page.keyboard.press('Tab')
  await page.keyboard.type(username)
  await page.keyboard.press(password)

  setInterval(async () => {
    await page.keyboard.type('teste automatico a cada 5s...')
    await page.keyboard.press(message)
  }, interval)

})();