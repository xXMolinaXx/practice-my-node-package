import { add, subtract, getCurrentDate } from "@kenj1997/practice-my-node-package";
const resultAdd = add(5, 3);
const resultSubtract = subtract(5, 3);

console.log(`Addition Result: ${resultAdd}`); // Addition Result: 8
console.log(`Subtraction Result: ${resultSubtract}`); // Subtraction Result: 2
console.log(`Current Date: ${getCurrentDate()}`); // Current Date: 2024-06-15