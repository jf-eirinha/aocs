const fs = require("fs");

const input = fs.readFileSync("2023/inputs/day1/input.txt", "utf8");

/**
 * Part 1
 */

let sum = 0;

const lines = input.split("\n");

for (const line of lines) {
  let firstDigit;
  let lastDigit;

  for (const char of line) {
    if (isNaN(parseInt(char))) {
      continue;
    }

    if (firstDigit === undefined) {
      firstDigit = char;
      continue;
    }

    if (firstDigit !== undefined) {
      lastDigit = char;
    }
  }

  if (lastDigit === undefined) {
    lastDigit = firstDigit;
  }

  sum += parseInt(firstDigit + lastDigit);
}

console.log("sum:", sum);
