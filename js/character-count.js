var el;                                                    

function countCharacters(e) {                                    
  var textEntered, countRemaining, counter;          
  textEntered = document.getElementById('tweet').value;  
  counter = (140 - (textEntered.length));                  // Num of chars left
  countRemaining = document.getElementById('charactersRemaining'); // Counter element
  countRemaining.textContent = counter;                       // Show chars left 
}
el = document.getElementById('tweet');                   
el.addEventListener('keyup', countCharacters, false);