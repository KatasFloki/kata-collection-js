const fs = require('fs');
const puppeteer = require('puppeteer');

const BASE_URL = 'https://www.codewars.com/kata/';

const kataInformationParser = ({ id, title, parsedDescription, code }) => {
  return `
/*
Kata Id: ${id}

Title:
  ${title}

Intructions:
  ${parsedDescription}

Link: ${BASE_URL}${id}

Solution
  ${code}
*/
`
}

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://www.codewars.com/kata/generate-range-of-integers/train/javascript', {waitUntil: 'networkidle0'});
  await page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.2.1.min.js' });

  let username = await page.evaluate(() => {
    const $ = window.$;
    const kyu = $('.inner-small-hex.is-extra-wide span').eq(2).text();
    const title = $('h4.mbs.is-white-text').eq(0).text();
    const description = $('#description').text();
    
    const parsedKyu = kyu.split(" ")[0];

    const parsedDescription = description.split('\n').map((e,i) => {
      let characterCount = 0;
      return e.split('').map((e,i) => {
        if(characterCount++ >= 100 && e == ' ') {
          characterCount = 0;
          return '\n\t'
        } 
        return e;
      }).join('')
    }).join('\n\t')

    return { parsedKyu, title, parsedDescription }
  }) 
  
  console.log(username)
  
  browser.close();

  fs.writeFile('test.js', kataInformationParser(username), function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  }); 
}

run();