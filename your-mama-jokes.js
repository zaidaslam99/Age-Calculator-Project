const btnEl = document.getElementById("btn");
const quoteE1 = document.getElementById("quote");

const yourMamaJokes = [
  "Your mama so old, she knew Burger King when he was just a prince.",
  "Your mama so short, she uses a Dorito as a surfboard.",
  "Your mama so big, when she wears yellow, people yell 'Taxi!'",
  "Your mama so slow, it took her two hours to watch '60 Minutes.'",
  "Your mama so clumsy, she tripped over a wireless network.",
  "Your mama so lazy, she stuck her face out the window and let the wind blow her nose.",
  "Your mama so smart, she solved a Rubik's Cube by eating the colors off.",
  "Your mama so hairy, Bigfoot took her picture.",
  "Your mama so skinny, she hula-hoops with a Cheerio.",
  "Your mama so poor, ducks throw bread at her.",
  "Your mama so tall, she stepped over a skyscraper and didn’t notice.",
  "Your mama so loud, she makes thunder jealous.",
  "Your mama so ugly, her reflection runs away.",
  "Your mama so big, when she goes camping, the bears hide their food.",
  "Your mama so slow, she has to chase her shadow.",
  "Your mama so sweet, she makes sugar jealous.",
];

btnEl.addEventListener("click", generateMamaJoke);

function generateMamaJoke() {
  const randomIndex = Math.floor(Math.random() * yourMamaJokes.length);
  quoteE1.innerText = yourMamaJokes[randomIndex];
}

/**
 * The main idea of this code is we are going to be working with two different elements one that is going to be a display element and the other is going to be a button element. The main take away from all this is we are getting a list creating a function then listening for a click when the button is clicked and then running the function. The logic behind the function is simple get a random number then index it with list and then change the inner text to match it.
 */
