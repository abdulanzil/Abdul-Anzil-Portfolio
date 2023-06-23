// Text content for animation
const lines = [
  "Hello, I'm Abdul Anzil, a passionate IT fresher driven by the endless possibilities of building Intelligent systems. With a degree in Electronics and Communication Engineering from APJ Abdul Kalam Technological University, I am equipped with a strong foundation to explore the exciting world of Hardware engineering. My unwavering enthusiasm for the AI field fuels my determination to make a significant impact and contribute to the future of intelligent technologies.",
];

// Configuration variables
const typingSpeed = 20; // Speed at which each character is typed (in milliseconds)
const lineDelay = 50; // Delay between displaying each line (in milliseconds)

const aboutMeElement = document.getElementById("typed-text");
let currentLineIndex = 0;
let currentCharacterIndex = 0;

function animateText() {
  if (currentLineIndex < lines.length) {
    const line = lines[currentLineIndex];

    if (currentCharacterIndex < line.length) {
      aboutMeElement.innerHTML += line.charAt(currentCharacterIndex);
      currentCharacterIndex++;
      setTimeout(animateText, typingSpeed);
    } else {
      currentCharacterIndex = 0;
      currentLineIndex++;
      aboutMeElement.innerHTML += "<br>";
      setTimeout(animateText, lineDelay);
    }
  }
}

setTimeout(() => {
  animateText();
}, 2000);
