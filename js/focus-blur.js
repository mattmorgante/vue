function tip() {                          
  elMsg.innerHTML = 'Username must be at least 5 characters'; // only called when user clicks within box
}

function checkLength() {                        // only called when user clicks away 
  var username = el.value;                        // Store the value of the username field in a variable 
  if (username.length < 5) {                      
    elMsg.textContent = 'Not long enough, yet...';// Update message
  } else {                                        
    elMsg.textContent = '';                       // Clear the message
  }
}

var el = document.getElementById('username');     // Get the username field
var elMsg = document.getElementById('feedback');  // Get the area below the username field

el.addEventListener('focus', tip, false); // on focus (when user clicks on box), call tip()
el.addEventListener('blur', checkLength, false);// on blur (when user clicks away), call checkLength()