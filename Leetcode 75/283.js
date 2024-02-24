const nums = [0, 0, 1];

let count = 0;

for (let i = nums.length - 1; i >= 0; i--) {
  if (nums[i] === 0) {
    nums.splice(i, 1);
    count++;
  }
}

for (let i = 0; i < count; i++) {
  nums.push(0);
}

console.log(nums);
