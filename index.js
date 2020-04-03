const puppet = require('puppeteer');

const username = 'example@domain.com';
const password = '******';
const message = 'this is the message...';
const interval = 5000;

(async () => {
  const browser = await puppet.launch({headless: false});
  const page = await browser.newPage();

  await page.goto('https://discordapp.com/channels/558087780018683916/695269352219344966');

  await page.focus('.inputDefault-_djjkz')
  await page.keyboard.type(username)
  await page.keyboard.press('Tab')
  await page.keyboard.type(password)
  await page.keyboard.press('Enter')

  setInterval(async () => {
    await page.keyboard.type(message)
    await page.keyboard.press('Enter')
  }, interval)

})();