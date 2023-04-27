const quotes = [
  {
    quote:
      "Civilization exists by geological consent, subject to change without notice.",
    author: "Will Durant",
  },
  {
    quote: "A stone is ingrained with geological and historical memories.",
    author: "Andy Goldsworthy",
  },
  {
    quote: "Geologists have a saying - rocks remember.",
    author: "Neil Armstrong",
  },
  { quote: "The present is the key to the past", author: "Charles Lyell" },
  {
    quote: "We learn geology the morning after the earthquake",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "With their four-dimensional minds, and their interdisciplinary ultra-verbal way, geologists can wriggle out of almost anything.",
    author: "John McPhee",
  },
  {
    quote:
      "We live in a society exquisitely dependent upon science and technology, in which hardly anyone knows anything about science and technology.",
    author: "Carl Sagan",
  },
  {
    quote:
      "It strikes me that all our knowledge about the structure of our Earth is very much like what an old hen would know of the hundred-acre field in a corner of which she is scratching.",
    author: "Charles Darwin",
  },
  {
    quote:
      "Geological age plays the same part in our view of the duration of the universe as the earth’s orbit radius does in our view of the immensity of space.",
    author: "John Joly",
  },
  {
    quote:
      "It is a great philosophical breakthrough for geologists to accept catastrophe as a normal part of Earth history.",
    author: "Erie Kauffman",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
