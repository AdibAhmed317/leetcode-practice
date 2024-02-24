const nums = [1, 2, 3, 4];
const n = nums.length;
const answer = [];
const leftProducts = [];
const rightProducts = [];

for (let i = 0; i < n; i++) {
  leftProducts.push(1);
  rightProducts.push(1);
}

for (let i = 1; i < n; i++) {
  let product = 1;
  for (let j = 0; j < i; j++) {
    product *= nums[j];
  }
  leftProducts[i] = product;
}

console.log(leftProducts);
console.log(rightProducts);

// for (let i = 0; i < nums.length; i++) {
//     let temp = 1;
//     for (let j = 0; j < nums.length; j++) {
//       if (j !== i) {
//         temp *= nums[j];
//       }
//     }
//     answer.push(temp);
//   }
