// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors.
const order = prompt(`Enter your order`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`);

// They type it as a list. Default value above.

// Their input is saved above as one long string in a variable called "order." Split it into an array of strings.
const orderArray = order.split(",");

// The site begins with an empty object.

/* Loop through the array and modify the object like this: 
  -Each time there is a unique flavor, add a key with that flavor name and the value of 1.
  -Each time the flavor is already a key, add 1 to the value of that key.
*/

// Log the object to the console.