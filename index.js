const fetch = require('node-fetch');

async function getRandomBreakingBadQuote() {
  const response = await fetch(
    'https://www.breakingbadapi.com/api/quote/random',
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  console.log(response);
  const json = await response.json();
  console.log(json);
}

getRandomBreakingBadQuote();
