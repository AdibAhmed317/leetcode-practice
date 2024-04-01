// 1732. Find the Highest Altitude
const gain = [
  44, 32, -9, 52, 23, -50, 50, 33, -84, 47, -14, 84, 36, -62, 37, 81, -36, -85,
  -39, 67, -63, 64, -47, 95, 91, -40, 65, 67, 92, -28, 97, 100, 81,
];

let maxAlt = 0;
let currentAlt = 0;

for (let i = 0; i < gain.length; i++) {
  currentAlt += gain[i];
  if (currentAlt > maxAlt) {
    maxAlt = currentAlt;
  }
}

console.log(maxAlt);

// let prifixArr = [];

// prifixArr[0] = 0;

// let i = 1;
// while (i < gain.length + 1) {
//   prifixArr[i] = prifixArr[i - 1] + gain[i - 1];
//   i++;
// }

// let maxAlt = 0;
// for (let i = 0; i < prifixArr.length; i++) {
//   if (prifixArr[i] > maxAlt) {
//     maxAlt = prifixArr[i];
//   }
// }
