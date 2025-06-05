// Import all utility functions from the external module
import {
  showName,
  currencyConversion,
  analyzeTriangle,
  checkLongestWord,
} from "./function.js";

// ----------------------------
// Function 1: Greeting Message
// ----------------------------
console.log("\nFunction 1: showName");
showName("John", "Smith");
console.log("--------------------------------------------------------------");

// ----------------------------
// Function 2: Currency Conversion
// ----------------------------
console.log("Function 2: currencyConversion");
const val1 = currencyConversion(120, "USD", "EUR");
console.log(val1);
console.log("--------------------------------------------------------------");

// ----------------------------
// Function 3: Triangle Analyzer
// ----------------------------
console.log("Function 3: analyzeTriangle");
const s1 = 3, s2 = 4, s3 = 5;
const val2 = analyzeTriangle(s1, s2, s3);
console.log(val2);
console.log("--------------------------------------------------------------");

// ----------------------------
// Function 4: Longest Word Finder
// ----------------------------
console.log("Function 4: checkLongestWord");
const sentence = "This is a simple sentence with some long words.";
const val3 = checkLongestWord(sentence);
console.log(`Longest word is: ${val3}`);
console.log("--------------------------------------------------------------");
