// Nicole Ling 300346091 - CSIS3380 Project 1

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
    source: 'Patrick McKenzie',
    citation: 'Twitter',
    year: 2016
  },
  {
    quote: 'A good programmer is someone who always looks both ways before crossing a one-way street.',
    source: 'Doug Linder',
    citation: 'Twitter',
    year: 2021
  },
  {
    quote: 'The function of good software is to make the complex appear to be simple.',
    source: 'Grady Booch',
    citation: 'Twitter',
    year: 2019
  },
  {
    quote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    source: 'Martin Fowler',
    citation: 'Twitter',
    year: 2017
  },
  {
    quote: 'When debugging, novices insert corrective code; experts remove defective code.',
    source: 'Richard Pattis',
    citation: 'Twitter',
    year: 2020
  },
  {
    quote: 'The best learners are the people who push through the discomfort of being objectively bad at something.',
    source: 'Tommy Collison',
    citation: 'Twitter',
    year: 2021
  }
];

/***
 * `getRandomQuote` function
***/
const getRandomQuote = () => {
  // Generate a random number
  let randomNum = Math.floor(Math.random() * quotes.length) + 0;

  // Get a random quote
  let randomQuote = quotes[randomNum];

  return randomQuote;
}

/***
 * `printQuote` function
***/
const printQuote = () => {

  // Get a random quote
  let randomQuote = getRandomQuote();

  // Create HTML element to contain quote
  let PtoHTML1 = '';
  if(randomQuote.quote && randomQuote.quote != '') {
    PtoHTML1 += `<p class='quote'>${randomQuote.quote}</p>`;
  }
  if(randomQuote.source && randomQuote.source != '') {
    PtoHTML1 += `<p class='source'>${randomQuote.source}`;
  }
  if(randomQuote.citation && randomQuote.citation != '') {
    PtoHTML1 += `<span class='citation'>${randomQuote.citation}</span>`;
  }
  if(randomQuote.year && randomQuote.year != '') {
    PtoHTML1 += `<span class='year'>${randomQuote.year}</span>`;
  }
  PtoHTML1 += '</p>';

  // Display quote in quote box element
  document.getElementById('quote-box').innerHTML = PtoHTML1;
}

// Bind click listener to 'get another quote' button
document.getElementById('load-quote').addEventListener("click", printQuote, false);