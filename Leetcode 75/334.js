const nums = [5, 4, 3, 2, 1];
let flag = false;

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length - 1; j++) {
    for (let k = j + 1; k < nums.length - 2; k++) {
      if (nums[i] < nums[j] < nums[k]) {
        flag = true;
      }
    }
  }
}

console.log(flag);
