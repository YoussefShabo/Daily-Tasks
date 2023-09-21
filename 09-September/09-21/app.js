// Select all elements with the class "movingDiv"
const movingDivs = document.querySelectorAll('.movingDiv');

function moveRandomly(element) {
    const maxX = window.innerWidth - element.clientWidth;
    const maxY = window.innerHeight - element.clientHeight;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    element.style.left = `${newX}px`;
    element.style.top = `${newY}px`;
}

// Move each div initially
movingDivs.forEach(moveRandomly);

// Move the divs periodically (e.g., every 2 seconds)
setInterval(() => {
    movingDivs.forEach(moveRandomly);
}, 2000);
