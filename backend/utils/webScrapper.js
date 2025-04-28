const puppeteer = require('puppeteer');

async function verifyDoctor(licenseNumber) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Go to NMC Indian Medical Register search page
  await page.goto('https://www.nmc.org.in/information-desk/indian-medical-register/');

  // Wait for the form to load
  await page.waitForSelector('#registration_number');

  // Type license number into the field
  await page.type('#registration_number', licenseNumber);

  // Click search button (or submit form)
  await Promise.all([
    page.click('#searchButton'), // Assume button ID is like this (inspect the page for correct ID)
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
  ]);

  // Scrape the results
  const doctorData = await page.evaluate(() => {
    const result = document.querySelector('.search-results');
    if (!result) return null;

    return {
      name: result.querySelector('.name')?.innerText || '',
      registrationNumber: result.querySelector('.reg-no')?.innerText || '',
      state: result.querySelector('.state')?.innerText || '',
      year: result.querySelector('.year')?.innerText || '',
    };
  });

  await browser.close();

  return doctorData;
}

module.exports = verifyDoctor;
