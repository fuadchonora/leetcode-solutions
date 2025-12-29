function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // console.log(nums1, nums2);
  function median(nums: number[]): number {
    // console.log(nums);
    if (nums.length % 2 === 0)
      return (nums[nums.length / 2 - 1]! + nums[nums.length / 2]!) / 2;
    return nums[Math.floor(nums.length / 2)]!;
  }

  let i = 0;
  let j = 0;
  while (i < nums1.length || j < nums2.length) {
    if (nums1[i] === undefined)
      return median(nums1.concat(nums2.slice(j, nums2.length)));
    if (nums2[j] === undefined) return median(nums1);

    if (nums1[i]! > nums2[j]!) {
      nums1.splice(i, 0, nums2[j]!);
      i++;
      j++;
    } else if (nums1[i + 1]! > nums2[j]!) {
      nums1.splice(i + 1, 0, nums2[j]!);
      i++;
      j++;
    } else {
      i++;
    }
  }

  return 0;
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([0, 0, 0, 0, 0], [-1, 0, 0, 0, 0, 0, 1]));
