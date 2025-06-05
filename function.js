// Function 1: Display a welcome message with the user's full name and college name
export function showName(firstName, lastName) {
  // Input validation: check that both names are provided
  if (!firstName || !lastName) {
    console.log("Error: First name and last name are required.");
    return;
  }

  // Concatenate full name
  const fullName = firstName + " " + lastName;
  const collegeName = "Georgian@ILAC";

  // Display the welcome message
  console.log(`Welcome to ${collegeName}, ${fullName}`);
}

// Function 2: Convert currency using a fixed exchange rate table
export function currencyConversion(amount, fromCurrency, toCurrency) {
  // Exchange rates relative to 1 USD
  const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.2,
    JPY: 156.3,
    CAD: 1.37,
  };

  // Validate input amount
  if (isNaN(amount) || amount <= 0) {
    return "Error: Please enter a valid positive amount.";
  }

  // Standardize currency codes to uppercase
  fromCurrency = fromCurrency.toUpperCase();
  toCurrency = toCurrency.toUpperCase();

  // Ensure both currencies are available in the rate table
  if (!rates[fromCurrency] || !rates[toCurrency]) {
    return "Invalid currency code. Please use one of the following: USD, EUR, GBP, INR, JPY, CAD.";
  }

  // Convert to USD first, then to target currency
  const usdAmount = amount / rates[fromCurrency];
  const convertedAmount = usdAmount * rates[toCurrency];

  // Return formatted conversion result
  return `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}.`;
}

// Function 3: Analyze the type of a triangle and calculate its area using Heron's formula
export function analyzeTriangle(a, b, c) {
  // Validate that all inputs are positive numbers
  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    return "Error: Please enter valid positive numbers for the sides of the triangle.";
  }

  // Check triangle inequality rule
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Invalid triangle sides.";
  }

  // Determine triangle type
  let type = "Scalene"; // All sides different
  if (a === b && b === c) {
    type = "Equilateral"; // All sides equal
  } else if (a === b || b === c || a === c) {
    type = "Isosceles"; // Two sides equal
  }

  // Calculate semi-perimeter for Heron's formula
  const s = (a + b + c) / 2;

  // Heron's formula for area of a triangle
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return `Triangle is ${type} with area: ${area.toFixed(2)}`;
}

// Function 4: Return the longest word in a sentence
export function checkLongestWord(sentence) {
  // Ensure sentence is a valid non-empty string
  if (typeof sentence !== "string" || sentence.trim() === "") {
    return "Error: Please provide a valid non-empty sentence.";
  }

  // Split sentence into words by whitespace
  const words = sentence.trim().split(/\s+/);

  // Track the longest word found
  let longestWord = "";
  let maxLength = 0;

  for (const word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
      longestWord = word;
    }
  }

  return longestWord;
}
