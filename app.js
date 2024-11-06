// Select the HTML elements
const bottle = document.getElementById("bottle");
const spinButton = document.getElementById("spinButton");

// Initialize current rotation angle
let currentRotation = 0;

// Function to spin the bottle clockwise on every click
function spinBottle() {
  // Generate a random increment between 720 and 1440 degrees
  const rotationIncrement = Math.floor(720 + Math.random() * 720);

  // Update the total rotation by adding the increment
  currentRotation += rotationIncrement;

  // Apply the new rotation to the bottle
  bottle.style.transform = `rotate(${currentRotation}deg)`;
}

// Add a click event listener to the button
spinButton.addEventListener("click", spinBottle);
