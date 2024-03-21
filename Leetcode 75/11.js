const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const n = height.length;
let leftPart = 0;
let rightPart = n - 1;
let maxArea = 0;

while (leftPart < rightPart) {
  const width = rightPart - leftPart;
  const minHeight = Math.min(height[leftPart], height[rightPart]);
  const currentArea = minHeight * width;
  maxArea = Math.max(maxArea, currentArea);

  if (height[leftPart] < height[rightPart]) {
    leftPart++;
  } else {
    rightPart--;
  }
}

console.log(maxArea);

//TLE
// for (let i = 0; i < n; i++) {
//     for (let j = n - 1; j >= i; j--) {
//       const minHeight = Math.min(height[i], height[j]);
//       const currentArea = minHeight * (j - i);
//       maxArea = Math.max(maxArea, currentArea);
//     }
//   }
