const nums = [5, 4, 3, 2, 1];

let flag = false;
let min1 = Infinity;
let min2 = Infinity;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] <= min1) {
    min1 = nums[i];
  } else if (nums[i] <= min2) {
    min2 = nums[i];
  } else {
    flag = true;
    break;
  }
}

console.log(flag);

// const nums = [5, 4, 3, 2, 1];

//TLE
// let flag = false;
// for (let i = 0; i < nums.length - 2; i++) {
//   for (let j = i + 1; j < nums.length - 1; j++) {
//     for (let k = j + 1; k < nums.length; k++) {
//       if (nums[i] < nums[j] && nums[i] < nums[k] && nums[j] < nums[k]) {
//         flag = true;
//       }
//     }
//   }
// }

// console.log(flag);
