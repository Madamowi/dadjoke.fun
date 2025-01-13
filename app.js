// Array of Dad Jokes (expanded and "fixed")
const dadJokes = [
  "Why don't eggs tell jokes? They'd crack each other up.",
  "What do you call a fake noodle? An Impasta!",
  "Why did the scarecrow get promoted? Because he was outstanding in his field.",
  "I tried to sue the airline for misplacing my luggage. I lost my case.",
  "How does a penguin build its house? Igloos it together.",
  "Why did the math book look so sad? Because it had so many problems.",
  "Did you hear the rumor about butter? Well, I'm not going to spread it.",
  "What do you call a factory that makes OK products? A satisfactory.",
  "What did the janitor say when he jumped out of the closet? Supplies!",
  "What do you call a belt made of watches? A waist of time.",
  "I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along.",
  "What do you call a bear with no teeth? A gummy bear!",
  "I'm reading a book about anti-gravity. It's impossible to put down.",
  "Why did the bicycle fall over? Because it was two-tired!",
  "How do you organize a space party? You planet!",
  "Did you hear about the restaurant on the moon? Great food, but no atmosphere.",
  "What did the ocean say to the beach? Nothing, it just waved.",
  "I'm so good at sleeping, I can do it with my eyes closed!",
  "I tried to catch fog yesterday. I mist!",
  "Why couldn't the bicycle stand up by itself? It was two-tired!",
  "I used to hate facial hair... but then it grew on me.",
  "What do you call a boomerang that doesn't come back? A stick!",
  "My wife told me to stop impersonating a flamingo. I had to put my foot down.",
  "I'm reading a horror story in Braille. Something bad is about to happen... I can feel it.",
  "I was wondering why the ball was getting bigger. Then it hit me.",
  "What do you call someone with no body and no nose? Nobody knows.",
  "I changed my password to 'incorrect.' Whenever I forget it, the computer says, 'Your password is incorrect.'",
  "Why couldn't the pirate learn the alphabet? Because he was always lost at C!",
  "I tried to climb a really tall tower in France. Eiffel off!",
  "Why did the invisible man turn down the job offer? He couldn't see himself doing it.",
  "I'm not indecisive. Unless you want me to be.",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "I gave all my dead batteries away. Free of charge."
];

// Function to get a random joke and its ID
function getRandomDadJoke() {
  const randomIndex = Math.floor(Math.random() * dadJokes.length);
  return { joke: dadJokes[randomIndex], id: randomIndex };
}

// Function to update the shareable joke link
function updateShareLink(jokeId) {
  const shareLink = document.getElementById('shareLink');
  const currentURL = window.location.origin + window.location.pathname; // Base URL without hash
  const fullURL = `${currentURL}#${jokeId}`; // Add the joke ID as a hash
  shareLink.href = fullURL;
  shareLink.textContent = "Share this joke";
}

// Function to get the joke based on the URL hash
function getJokeFromURL() {
  const hash = window.location.hash.substring(1); // Get hash without '#'
  const jokeId = parseInt(hash, 10); // Convert hash to a number
  if (!isNaN(jokeId) && jokeId >= 0 && jokeId < dadJokes.length) {
    return { joke: dadJokes[jokeId], id: jokeId };
  }
  return null; // Return null if the hash is invalid
}

// On page load
window.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded and parsed"); // Debugging statement
  
  const jokeDisplay = document.getElementById('jokeDisplay');
  const jokeButton = document.getElementById('jokeButton');
  const shareLink = document.getElementById('shareLink'); // Added for debugging
  
  if (!jokeDisplay || !jokeButton || !shareLink) {
    console.error("One or more DOM elements are missing!");
    return;
  }
  
  // Check if there's a joke ID in the URL hash
  const jokeFromURL = getJokeFromURL();
  if (jokeFromURL) {
    // Display the joke from the URL
    jokeDisplay.textContent = jokeFromURL.joke;
    updateShareLink(jokeFromURL.id);
    console.log(`Displayed joke ID: ${jokeFromURL.id}`);
  } else {
    // Display a random joke if no hash is present
    const initialJoke = getRandomDadJoke();
    jokeDisplay.textContent = initialJoke.joke;
    updateShareLink(initialJoke.id);
    console.log(`Displayed initial joke ID: ${initialJoke.id}`);
  }

  // Update joke and share link on button click
  jokeButton.addEventListener('click', () => {
    const newJoke = getRandomDadJoke();
    jokeDisplay.textContent = newJoke.joke;
    updateShareLink(newJoke.id);
    console.log(`Displayed new joke ID: ${newJoke.id}`);
  });
});
