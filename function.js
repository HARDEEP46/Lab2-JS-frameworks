// Display a welcome message including the user's full name and college name
export function showName(firstName, lastName) {
  if (!firstName || !lastName) {
    console.log("Error: First name and last name are required.");
    return;
  }
  const fullName = firstName + " " + lastName;
  const collegeName = "Georgian@ILAC";
  const message = `\nWelcome to ${collegeName}, ${fullName}`;
  console.log(message);
  console.log("--------------------------------------------------------------");
}

// Convert currency using predefined static exchange rates
export function currencyConversion(amount, fromCurrency, toCurrency) {
  const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.2,
    JPY: 156.3,
    CAD: 1.37,
  };

  if (isNaN(amount) || amount <= 0) {
    return "Error: Please enter a valid positive amount.";
  }

  fromCurrency = fromCurrency.toUpperCase();
  toCurrency = toCurrency.toUpperCase();

  // Check if both currencies exist in the rates object
  if (!rates[fromCurrency] || !rates[toCurrency]) {
    return "Invalid currency code. Please use one of the following: USD, EUR, GBP, INR, JPY, CAD.";
  }

  // Convert to USD first, then to the target currency
  const usdAmount = amount / rates[fromCurrency];
  const convertedAmount = usdAmount * rates[toCurrency];
  return `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}.`;
}

// Analyze the type of triangle and calculate its area
export function analyzeTriangle(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        return "Error: Please enter valid positive numbers for the sides of the triangle.";
    }
  // Triangle inequality check
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Invalid triangle sides.";
  }

  let type = "Scalene";
  if (a === b && b === c) {
    type = "Equilateral";
  } else if (a === b || b === c || a === c) {
    type = "Isosceles";
  }

  // Using Heron's formula to calculate area
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return `Triangle is ${type} with area: ${area.toFixed(2)}`;
}

// Find and return the longest word in a given sentence
export function checkLongestWord(sentence) {
  if (typeof sentence !== "string" || sentence.trim() === "") {
    return "Error: Please provide a valid non-empty sentence.";
  }

  const words = sentence.trim().split(/\s+/);
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
