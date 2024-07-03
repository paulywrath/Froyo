// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors.
const order = prompt(`Enter your order`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`);

// They type it as a list. Default value above.

// Their input is saved above as one long string in a variable called "order." Split it into an array of strings.
const orderArray = order.split(",");

// The site begins with an empty object.
const flavorCount = {};

// Loop through the array and modify the object.
for (let i = 0; i < orderArray.length; i++) {
  let flavorName = orderArray[i]; 
  
  // Each time there is a unique flavor, add a key with that flavor name and the value of 1. Each time the flavor is already a key, add 1 to the value of that key.
  if (!flavorCount[flavorName]) {
    flavorCount[flavorName] = 1;
  } else {
    flavorCount[flavorName] += 1;
  }
 }

// Log the object to the console.
console.log(flavorCount);