// 1004. Max Consecutive Ones III
const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
let k = 2;

let i = 0;
let j = 0;
while (i < nums.length) {
  if (nums[i] == 0) {
    k--;
  }
  if (k < 0) {
    if (nums[j] == 0) {
      k++;
    }
    j++;
  }
  i++;
}

console.log(i - j);
