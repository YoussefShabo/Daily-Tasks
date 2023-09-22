// Select all elements with the class "movingDiv"
const movingDivs = document.querySelectorAll(".movingDiv");

function moveRandomly(element) {
  const newX = Math.random() * window.innerWidth;
  const newY = Math.random() * window.innerHeight;

  element.style.left = `${newX}px`;
  element.style.top = `${newY}px`;
}

// Move each div initially
movingDivs.forEach(moveRandomly);

// Move the divs periodically (e.g., every 2 seconds)
setInterval(() => {
  movingDivs.forEach(moveRandomly);
}, 4000);
