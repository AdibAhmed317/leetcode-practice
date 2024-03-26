const nums = [1, 12, -5, -6, 50, 3];
const k = 4;

let sum = 0;
let maxSum = 0;
let i = 0;
while (i < k) {
  sum = sum + nums[i];
  i++;
}

maxSum = sum;
i = k;
while (i < nums.length) {
  sum += nums[i] - nums[i - k];
  if (sum > maxSum) {
    maxSum = sum;
  }
  i++;
}

console.log(maxSum / k);
