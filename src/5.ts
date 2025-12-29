function longestPalindrome(s: string): string {
  let maxLength = 0;
  let startIdx = 0;
  let maxCoveredIdx = 0;

  for (let i = 0; i < s.length; i++) {
    if (i < maxCoveredIdx) break;
    let length = 1;

    let m = i;
    let n = i;

    while (s[i] === s[n + 1]) {
      length++;
      n++;
    }

    while (s[m] && s[n] && s[m] === s[n]) {
      if (length > maxLength) {
        maxLength = length;
        startIdx = m;
      }

      if (m > maxCoveredIdx) maxCoveredIdx = m;

      length = length + 2;
      m--;
      n++;
    }
  }

  return s.slice(startIdx, startIdx + maxLength);
}

// console.log(
//   longestPalindrome(
//     "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
//   )
// );
// console.log(longestPalindrome("aaaa"));
// console.log(longestPalindrome("a"));
// console.log(longestPalindrome("jhghgcccaaaa"));
// console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("cbbca"));
// console.log(longestPalindrome("babad"))

// ("jhghgccccccccccaaaa");
// ("1113113579975311331");
