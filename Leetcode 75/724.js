// 724. Find Pivot Index
const nums = [1, 2, 3];
let totalSum = 0;

for (let i = 0; i < nums.length; i++) {
  totalSum += nums[i];
}

let leftSum = 0;
let rightSum = totalSum;
let index = -1;

for (let i = 0; i < nums.length; i++) {
  rightSum -= nums[i];
  if (leftSum == rightSum) {
    index = i;
    break;
  }
  leftSum += nums[i];
}

console.log(index);
