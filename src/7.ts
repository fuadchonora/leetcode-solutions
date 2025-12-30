function reverse(x: number): number {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  if (x >= 0 && x <= 9) {
    return x;
  }

  const isNegative = x < 0;
  let num = Math.abs(x);
  let reversed = 0;

  while (num > 0) {
    const digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  if (isNegative) {
    reversed = -reversed;
  }

  if (reversed < INT_MIN || reversed > INT_MAX) {
    return 0;
  }

  return reversed;
}

console.log(reverse(-123));
