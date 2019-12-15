const cheerio = require('cheerio');
const axios = require("axios");

axios.get('https://www.codewars.com/kata/beginner-lost-without-a-map/train/javascript')
  .then((response) => {
  // Load the web page source code into a cheerio instance
  const $ = cheerio.load(response.data)
  
  console.log($.html())
})