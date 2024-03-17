wordList = [
  {
    word: "guitar",
    hint: "A musical instrument with strings.",
  },
  {
    word: "oxygen",
    hint: "A colorless, odorless gas essential for life.",
  },
  {
    word: "Cat",
    hint: "A furry pet that often purrs.",
  },
  {
    word: "Computer",
    hint: "An electronic device used for processing data.",
  },
  {
    word: "Sunflower",
    hint: "A tall plant with large, yellow flowers.",
  },
  {
    word: "Gravity",
    hint: "The force that pulls objects towards each other.",
  },
  {
    word: "Chocolate",
    hint: "A sweet, brown treat made from cacao beans.",
  },
  {
    word: "Football",
    hint: "A sport played with a spherical ball by two teams.",
  },
  {
    word: "Rainbow",
    hint: "A colorful arc in the sky formed after rain.",
  },
  {
    word: "Elephant",
    hint: "A large mammal with a long trunk and tusks.",
  },
  {
    word: "Jazz",
    hint: "A genre of music characterized by improvisation.",
  },
  {
    word: "Diamond",
    hint: "A precious gemstone known for its brilliance.",
  },
  {
    word: "Bicycle",
    hint: "A two-wheeled vehicle propelled by pedals.",
  },
  {
    word: "Universe",
    hint: "All existing matter and space considered as a whole.",
  },
  {
    word: "Pizza",
    hint: "A round, savory dish with cheese and toppings.",
  },
  {
    word: "Library",
    hint: "A place where books and other materials are stored.",
  },
  {
    word: "Volcano",
    hint: "A mountain that erupts molten rock and ash.",
  },
  {
    word: "Whale",
    hint: "A large marine mammal often found in oceans.",
  },
  {
    word: "Butterfly",
    hint: "An insect with colorful wings and a proboscis.",
  },
  {
    word: "Galaxy",
    hint: "A massive system of stars, dust, and gas.",
  },
  {
    word: "Tiger",
    hint: "A large, carnivorous feline with striped fur.",
  },
  {
    word: "Rainforest",
    hint: "A dense forest with high rainfall and biodiversity.",
  },
  {
    word: "Telescope",
    hint: "An optical instrument used for viewing distant objects.",
  },
  {
    word: "Tornado",
    hint: "A violent rotating column of air extending from a storm.",
  },
  {
    word: "Banana",
    hint: "A curved, yellow fruit with a sweet taste.",
  },
  {
    word: "Dragon",
    hint: "A mythical creature often depicted as a large, fire-breathing reptile.",
  },
  {
    word: "Desert",
    hint: "A barren landscape with little precipitation.",
  },
  {
    word: "Cinema",
    hint: "A place where movies are shown to an audience.",
  },
  {
    word: "Iceberg",
    hint: "A large mass of ice floating in the ocean.",
  },
  {
    word: "Astronaut",
    hint: "A person trained to travel and work in space.",
  },
  {
    word: "Raindrop",
    hint: "A single drop of water falling from the sky.",
  },
  {
    word: "Soccer",
    hint: "A sport played with a spherical ball by two teams, also known as football in some countries.",
  },
  {
    word: "Horse",
    hint: "A large mammal often used for riding or pulling carts.",
  },
  {
    word: "Fossil",
    hint: "The preserved remains of ancient organisms.",
  },
  {
    word: "Cactus",
    hint: "A succulent plant with spines instead of leaves.",
  },
  {
    word: "Robot",
    hint: "A machine capable of carrying out complex tasks.",
  },
  {
    word: "Raincoat",
    hint: "A waterproof garment worn to protect against rain.",
  },
  {
    word: "Island",
    hint: "A piece of land surrounded by water.",
  },
  {
    word: "Vampire",
    hint: "A mythical creature said to feed on the blood of the living.",
  },
  {
    word: "Fireworks",
    hint: "Explosive devices used for entertainment or celebration.",
  },
  {
    word: "Sailboat",
    hint: "A boat propelled by sails instead of an engine.",
  },
  {
    word: "Microscope",
    hint: "An instrument used for viewing objects too small to be seen by the naked eye.",
  },
  {
    word: "Octopus",
    hint: "A marine animal with eight tentacles.",
  },
  {
    word: "Television",
    hint: "An electronic device used for receiving broadcast signals and displaying images and sound.",
  },
  {
    word: "Pyramid",
    hint: "A structure with a triangular base and sloping sides.",
  },
  {
    word: "Aurora",
    hint: "A natural light display in the Earth's sky, predominantly seen in high-latitude regions.",
  },
  {
    word: "Penguin",
    hint: "A flightless bird native to the Southern Hemisphere.",
  },
  {
    word: "Umbrella",
    hint: "A portable device used to protect against rain or sunlight.",
  },
  {
    word: "Giraffe",
    hint: "A tall African mammal with a long neck and spotted coat.",
  },
  {
    word: "Jungle",
    hint: "A dense forest typically found in tropical regions with abundant rainfall.",
  },
];

const keyboardDiv = document.querySelector(".keyboard");
const guessesText = document.querySelector(".guesses-text b");
const wordDisplay = document.querySelector(".word-display");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
  // Resetting all game variables and UI elements
  correctLetters = [];
  wrongGuessCount = 0;
  hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
  guessesText.innerText = `${wrongGuessCount}/${maxGuesses}`;
  keyboardDiv.querySelectorAll("button").forEach(btn=>btn.disabled=false);
  wordDisplay.innerHTML = currentWord
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
  gameModal.classList.remove("show");
};
const getRandomWord = () => {
  // Selecting a random word and hint from the wordList
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word.toLowerCase();
  console.log(word);
  document.querySelector(".hint-text b").innerText = hint;
  resetGame();
};
const gameOver = (isVictory) => {
  // After 600ms of game complete.. showing modal with relevant details
  setTimeout(() => {
    const modalText = isVictory
      ? `You found the word:`
      : `The correct word was:`;
    gameModal.querySelector("img").src = `images/${
      isVictory ? "victory" : "lost"
    }.gif`;
    gameModal.querySelector("h4").innerText = `${
      isVictory ? "Congrats!" : "Game Over!"
    }`;
    gameModal.querySelector(
      "p"
    ).innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
  }, 300);
};

const initGame = (button, clickedLetter) => {
  // Checking if clickedLetter is exist on the currentWord
  if (currentWord.includes(clickedLetter)) {
    // Showing all correct letters on the word display
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctLetters.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    //If clicked letter doesn't exists then update the wrongGuessCount and hangman image
    wrongGuessCount++;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
  }
  button.disabled = true;
  guessesText.innerText = `${wrongGuessCount}/${maxGuesses}`;

  // Calling gameOver function if any of these condition meets
  if (wrongGuessCount === maxGuesses) return gameOver(false);
  if (correctLetters.length === currentWord.length) return gameOver(true);
};

// Creating keyboard buttons and adding event listeners
for (let i = 97; i <= 122; i++) {
  const button = document.createElement("button");
  button.innerText = String.fromCharCode(i);
  keyboardDiv.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, String.fromCharCode(i))
  );
}

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);
