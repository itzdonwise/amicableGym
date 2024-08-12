// Get the elements
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');

// Add mouseover event listeners
text1.addEventListener('mouseover', handleMouseOver);
text2.addEventListener('mouseover', handleMouseOver);

// Add mouseout event listeners
text1.addEventListener('mouseout', handleMouseOut);
text2.addEventListener('mouseout', handleMouseOut);

// Handle mouseover event
function handleMouseOver(event) {
  event.target.style.backgroundImage = "url('../img//fitness wallpaper.jpg')";
  document.addEventListener('mousemove', handleMouseMove);
}

// Handle mouseout event
function handleMouseOut(event) {
  event.target.style.backgroundImage = "none";
  document.removeEventListener('mousemove', handleMouseMove);
}

// Handle mousemove event
function handleMouseMove(event) {
  const backgroundImage = document.querySelector('./exercise/img/cadiro-img-2.jpeg');
  backgroundImage.style.backgroundPositionX = event.clientX + 'px';
  backgroundImage.style.backgroundPositionY = event.clientY + 'px';
}
