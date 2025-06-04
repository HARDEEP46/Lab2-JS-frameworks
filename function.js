export function showName(firstName , lastName) {
    console.log("Hello , " + firstName + " " + lastName);
}

export function conversionFunction(minutes){
    let hours = minutes / 60;
    return hours;
}


export function calculateCircleArea(radius) {
  if (radius <= 0 || isNaN(radius)) {
    return "Please enter a valid positive number for the radius.";
  }
  const area = Math.PI * Math.pow(radius, 2);
  return area;
}


function generatePassword(length = 12) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

