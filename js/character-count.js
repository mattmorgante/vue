var el;                                                    

function countCharacters(e) {                                    
  var textEntered, charDisplay, counter, lastkey;          
  textEntered = document.getElementById('tweet').value;  
  counter = (140 - (textEntered.length));                  // Num of chars left
  charDisplay = document.getElementById('charactersRemaining'); // Counter element
  charDisplay.textContent = counter;                       // Show chars left 
}
el = document.getElementById('tweet');                   
el.addEventListener('keyup', countCharacters, false);