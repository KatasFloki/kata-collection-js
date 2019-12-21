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

  const link = 'https://www.codewars.com/kata/santas-naughty-list/train/javascript';
  const slug = link.match(/kata\/(.*)\/train/)[1];

  await page.goto(link, {waitUntil: 'networkidle0'});
  await page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.2.1.min.js' });
  
  let kata = await page.evaluate(() => {
    const $ = window.$;
    const kyu = $('.inner-small-hex.is-extra-wide span').eq(1).text();
    const title = $('h4.mbs.is-white-text').eq(0).text();
    const description = $('#description').text();
    
    const parsedKyu = kyu.replace(" ", "-");
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

    return { 
      kyu,
      parsedKyu, 
      title,
      parsedDescription }
  })
  
  browser.close();

  kata.slug = slug;
  console.log(kata)

  fs.promises.mkdir(`code-wars/${kata.parsedKyu}/${kata.slug}`)
    .then(() => fs.promises.writeFile(`code-wars/${kata.parsedKyu}/${kata.slug}/index.js`,
      kataInformationParser(kata)))
}

run();
