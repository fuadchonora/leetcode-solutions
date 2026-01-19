function isPalindrome(x: number): boolean {
  const str = x.toString();
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] === str[len - 1 - i]) continue;
    return false;
  }
  return true;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
