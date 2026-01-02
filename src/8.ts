function myAtoi(s: string): number {
  const MIN = -(2 ** 31);
  const MAX = 2 ** 31 - 1;

  let i = 0;
  const n = s.length;

  // Ignore leading whitespace
  while (i < n && s[i] === " ") {
    i++;
  }

  // Determine the sign
  let sign = 1;
  if (i < n && (s[i] === "+" || s[i] === "-")) {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }

  // Convert digits
  let result = 0;
  while (i < n && s[i]! >= "0" && s[i]! <= "9") {
    const digit = parseInt(s[i]!);

    // Check for overflow before multiplying and adding
    // If result > MAX / 10, then result * 10 will overflow
    // If result === MAX / 10 and digit > 7, then result * 10 + digit will overflow
    if (
      result > Math.floor(MAX / 10) ||
      (result === Math.floor(MAX / 10) && digit > 7)
    ) {
      return sign === 1 ? MAX : MIN;
    }

    result = result * 10 + digit;
    i++;
  }

  return sign * result;
}

console.log(myAtoi("42"));
console.log(myAtoi(" -042")); // Output: 42
console.log(myAtoi("1337c0d3"));
console.log(myAtoi("0-1"));
console.log(myAtoi("words and 987"));
