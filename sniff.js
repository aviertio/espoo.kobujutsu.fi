// Test with HTML_CodeSniffer via Chrome
// npm i puppeteer-core html_codesniffer

const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage();
  page.on('console', msg => console.log(msg.text()));

  await page.goto('https://espoo.kobujutsu.fi');

  await page.addScriptTag({
    path: 'node_modules/HTML_CodeSniffer/build/HTMLCS.js'
  });
  await page.evaluate(function () {
    HTMLCS_RUNNER.run('WCAG2AA');
  });

  await browser.close();
})();
