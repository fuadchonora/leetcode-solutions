function lengthOfLongestSubstring(s: string): number {
  let seen = new Map<string, number>();
  let maxCount = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    let str = s[i]!;
    if (seen.has(str) && seen.get(str)! >= start) {
      start = seen.get(str)! + 1;
    }

    seen.set(str, i);
    maxCount = Math.max(maxCount, i - start + 1);
  }

  return maxCount;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("dvdf"));
