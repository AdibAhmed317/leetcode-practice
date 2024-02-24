const nums = [1, 2, 3, 4];
const n = nums.length;
const answer = [];
const leftPart = [];
const rightPart = [];

let temp = 1;
for (let i = 0; i < n; i++) {
  leftPart[i] = temp;
  temp *= nums[i];
}

temp = 1;
for (let i = n - 1; i >= 0; i--) {
  rightPart[i] = temp;
  temp *= nums[i];
}

for (let i = 0; i < n; i++) {
  answer[i] = leftPart[i] * rightPart[i];
}

return answer;

// for (let i = 0; i < nums.length; i++) {
//     let temp = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (j !== i) {
//         temp *= nums[j];
//       }
//     }
//     answer.push(temp);
//   }
