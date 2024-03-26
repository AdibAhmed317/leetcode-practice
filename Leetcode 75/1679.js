//1679. Max Number of K-Sum Pairs
// const nums = [1, 2, 3, 4];
// const k = 5;

const nums = [3, 1, 3, 4, 3];
const k = 6;

const n = nums.length;

let leftPart = 0;
let rightPart = n - 1;
let count = 0;

nums.sort((a, b) => a - b);

while (leftPart < rightPart) {
  const sum = nums[leftPart] + nums[rightPart];

  if (sum === k) {
    count++;
    leftPart++;
    rightPart--;
  } else if (sum < k) {
    leftPart++;
  } else {
    rightPart--;
  }
}

console.log(count);
