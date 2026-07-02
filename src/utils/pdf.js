const Puppeteer = require('puppeteer');

module.exports = async function buildPdf(inputFile, outputFile) {
  const browser = await Puppeteer.launch({
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto(`file://${inputFile}`, {
    waitUntil: 'networkidle0'
  });
  await page.pdf({
    path: outputFile,
    format: 'A4',
    border: 0,
    margin: {
      top: '1.2cm',
      right: '1.2cm',
      bottom: '1.2cm',
      left: '1.2cm',
    },
  });
  await browser.close();
};
