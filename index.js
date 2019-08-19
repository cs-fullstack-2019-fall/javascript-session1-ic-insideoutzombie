// Create a main function for all of your code.
// Keep asking the user to press 1, 2, or 3 until they press 'q' to quit.
//
// - If they press 1, alert "Challenge goes here".
// - If they press 2, alert "2".
// - If they press 3, alert "Hello World".
function main() {
let user;
  while(user !== "q") {
    user = prompt("Press 1, 2, 3 or 'q' to quit");
    switch (user) {
      case "q":
        console.log("Goodbye");
        break;
      case "1":
        letter();
        break;
      case "2":
        alert("2");
        break;
      case "3":
        alert("Hello World");
        break;
    }
  }
}
main();

// ### Challenge
// - If they press 1, ask them to press a, b, or c in a different function.
// If they press a, alert "A", if they press b, alert "B", if they press c, alert "C".
function letter() {
  let userInput;
  while(userInput !== "q"){
    userInput = prompt("press a, b, c or q to quit");
    switch (userInput) {
      case "q":
        console.log("Logging off!");
        break;
      case "a":
        alert("A");
        break;
      case "b":
        alert("B");
        break;
      case "c":
        alert("C");
        break;
    }
  }
}

class Values{
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

}

// ### Challenge 2
// - Return the values of a, b, or c to use in the main function.
