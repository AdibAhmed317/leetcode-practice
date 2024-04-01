// 1493. Longest Subarray of 1's After Deleting One Element
const nums = [1, 1, 0, 1];

let left = 0;
let right = 0;
let maxLen = 0;
let zeroCount = 0;

while (right < nums.length) {
  if (nums[right] === 0) {
    zeroCount++;
  }

  while (zeroCount === 2) {
    if (nums[left] === 0) {
      zeroCount--;
    }
    left++;
  }

  maxLen = Math.max(maxLen, right - left);
  right++;
}

console.log(maxLen); // Output: 3
