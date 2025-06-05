// Importing all custom utility functions from the external module
import {
  showName,
  currencyConversion,
  analyzeTriangle,
  checkLongestWord,
} from "./function.js";

// Greet the user with their name
showName("John", "Smith");

// Convert 120 USD to EUR and print the result
const val1 = currencyConversion(120, "USD", "EUR");
console.log(val1);

// Analyze the type and area of a triangle with given sides
const s1 = 3,
  s2 = 4,
  s3 = 5;
const val2 = analyzeTriangle(s1, s2, s3);
console.log(`Triangle info: ${val2}`);

// Use a sample sentence to determine the longest word
const sentence = "This is a simple sentence with some long words.";
const val3 = checkLongestWord(sentence);
console.log(`Longest word is: ${val3}`);
