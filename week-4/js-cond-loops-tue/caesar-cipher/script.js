console.log("Greetings from Tuesday!");

//returns the number of the char from ASCII table
function getCharNumber(char) {
  return char.charCodeAt(0);
}

function encodeCharWithShift(charNumber, shift) {
  let shiftedChar = 0;
  let shiftedCharNumber = charNumber;

  if (charNumber >= 65 && charNumber <= 90) {
    shiftedCharNumber = charNumber + shift
    
    if (shiftedCharNumber > 90 ) {
        shiftedCharNumber -= 26;
    } 
  }  else if (charNumber >= 97 && charNumber <= 122) {
    shiftedCharNumber = charNumber + shift

    if (shiftedCharNumber > 122 ) {
        shiftedCharNumber -= 26;
    } 
  }  

  return String.fromCharCode(shiftedCharNumber);
}

function getInputMessage() {
  let msg = prompt("Please write your message and we'll encode it right away!");
  
  if (msg != null) {
    message = msg;
  }
}

function encodeMsg() {
  let encodeMsg = "";
  for (const element of message) {
    let charNumber = getCharNumber(element);
    let charEncoded = encodeCharWithShift(charNumber, 25);
    encodeMsg += charEncoded;
  }

  return encodeMsg;
}

getInputMessage();
alert("Here is your msg: " + encodeMsg());

console.log(message);
console.log(encodeMsg());
