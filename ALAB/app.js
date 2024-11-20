// Part 1:

for (let i = 1; i <= 100; i++) {
    if (i %3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i% 3 === 0) {
        console.log("Fizz");
    } else if (if (i %5=== 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}

// Part 2:

// Step 1: Declare an arbitrary number 'n'
let n = 4; 

// Step 2: Find the next prime number using loop iterations
let nextPrime = n + 1; 
while (true) {
  let isPrime = true;

  // Step 3: Check if the number is prime using a for loop
  for (let i = 2; i <= Math.sqrt(nextPrime); i++) {
    if (nextPrime % i === 0) {
      isPrime = false; 
      break; 
    }
  }

  // Step 4: If the number is prime, log it and exit the loop
  if (isPrime) {
    console.log(`The next prime number after ${n} is: ${nextPrime}`);
    break;
  }

// Part 3:

// Example CSV String:
  // const csvString = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

// Variables 
    let currentCell = ""; 
    let currentRow = [];  

 // Loop through each character of the CSV string
for (let i = 0; i < csvString.length; i++) {
    const char = csvString[i];

 // Check for comma
 if (char === ',') {
    currentRow.push(currentCell);
    currentCell = "";
  } 

 // Check for newline and log data
 else if (char === '\n') {
    currentRow.push(currentCell); 
    console.log(currentRow.join(', '));


