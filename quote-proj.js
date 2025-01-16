const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");

const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "It always seems impossible until it's done. – Nelson Mandela",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The best way to predict the future is to create it. – Peter Drucker",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
];

btnEl.addEventListener("click", generateQuote);

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.innerText = quotes[randomIndex];
}
