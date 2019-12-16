const cheerio = require('cheerio');
const axios = require("axios");

axios.get('https://www.codewars.com/kata/projects/5df6a848c6ba5100142529a6/javascript/session')
  .then((response) => {
  // Load the web page source code into a cheerio instance
  console.log(response.data)
  
  
  /*const kyu = $('.inner-small-hex.is-extra-wide span').text();
  const title = $('h4.mbs.is-white-text').eq(0).text();
  const description = $('#description').text();
  
  console.log(kyu)
  console.log(title)
  console.log(description)*/

  
});