function twoSum(nums: number[], target: number): number[] {
  const found = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i]!;
    if (found.has(comp)) return [i, found.get(comp)!];

    found.set(nums[i]!, i);
  }

  return [-1, -1];
}

console.log(twoSum([3, 2, 4], 6));
