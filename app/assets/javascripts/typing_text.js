var stringArray = [];
stringArray[0] = "Welcome To Grouper!";
stringArray[1] = "See where the place to be is";
stringArray[2] = "Find an event, join the Party!";
stringArray[3] = "Enter Your location Here and Press Enter";

var timer,
    typingTextTimer,
    isTypingText = true,
    currentChar = 0,
    index = 0,
    clear = true;


function typingText() {
  if (clear) {
    document.getElementById('typing_text').placeholder = "";
    clear = false;
  }


  if (isTypingText) {
    if (currentChar < stringArray[index].length) {
      document.getElementById('typing_text').placeholder += stringArray[index].charAt(currentChar);
      currentChar++;
      timer = setTimeout('typingText()', 70);
    } else {
      clear = true;
      currentChar = 0;
      index == stringArray.length - 1 ? index = 0 : index++;
      timer = setTimeout('typingText()', 2000);

    }

  } else {
    clearTimeout(timer);
  }

}

