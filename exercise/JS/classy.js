
function showImage(textElement) {
  var cardID = textElement.nextElementSibling.id;
  document.getElementById(cardID).querySelector('img').style.transform = 'translateX(5%)';
}

function hideImage(textElement) {
  var cardID = textElement.nextElementSibling.id;
  document.getElementById(cardID).querySelector('img').style.transform = 'translateX( 100px)';

  
}

