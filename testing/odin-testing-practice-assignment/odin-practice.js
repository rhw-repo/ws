export const capitalise = () => {
  let string = "hello";
  const result = string.charAt(0).toUpperCase() + string.slice(1);
  // console.log(result);
  return result;
};

capitalise();

export const reverseString = () => {
  let str = "hello";
  let reversedStr = str.split("").reverse().join("");
  console.log(reversedStr);
  console.log(typeof reversedStr);
  return reversedStr;
};

export const calculator = (num1, operator, num2) => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  function operate(a, op, b) {
    if (op === "+") return add(a, b);
    if (op === "-") return subtract(a, b);
    if (op === "X") return multiply(a, b);
    if (op === "/") return divide(a, b);
  }

  return operate(num1, operator, num2);
};

export function caesarCipher(text, shiftAmount) {
  // Immutable string to work with
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // Define length of characters in it as integer, store it once
  const alphabetLength = alphabet.length;
  // Mutable variable to store output: empty string
  let encryptedText = "";

  for (let i = 0; i < text.length; i++) {
    // Get current character from original input text
    const originalChar = text[i];
    // Convert to lowercase to enable look up in "alphabet" (lower case string)
    const lowerCaseChar = originalChar.toLowerCase();
    // Find index position of character within that string
    // indexOf returns -1 if character not found within that string
    const originalIndex = alphabet.indexOf(lowerCaseChar);

    // indexOf returns -1 if not a character within "alpahbet",
    // i.e., character is not a letter, add it to existing encryptedText string
    // as it is and moves onto next iteration of loop
    if (originalIndex === -1) {
      encryptedText += originalChar;
      continue;
    }
    // shiftAmount will be passed to the function as a number added to 
    // the originalIndex position
    const shiftedIndex = originalIndex + shiftAmount;
    // Need to constrain the index position finding operations to 26 characters
    // as per alphabetLength so that shifting past "Z" wraps back to "A" 
    const wrappedIndex =
    // Calculate the remainder after shiftedIndex has been divided by 26
    // Add that to 26
    // Take that number and calculate the remainder after dividing by 26
      ((shiftedIndex % alphabetLength) + alphabetLength) % alphabetLength;
    const shiftedChar = alphabet[wrappedIndex];

    // Preserve original lower case / upper case of each letter with lowercase
    // as the default
    if (originalChar === originalChar.toUpperCase()) {
      encryptedText += shiftedChar.toUpperCase();
    } else {
      encryptedText += shiftedChar;
    }
  }

  return encryptedText;
}
