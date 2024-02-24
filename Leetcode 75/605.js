//8:00 PM
// const flowerbed = [1, 0, 0, 0, 0, 0, 1];
const flowerbed = [1, 0, 0, 0, 1];
let n = 2;
let count = 0;
for (let i = 0; i < flowerbed.length; i++) {
  if (
    flowerbed[i] === 0 &&
    (i === 0 || flowerbed[i - 1] === 0) &&
    (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
  ) {
    flowerbed[i] = 1;
    count++;
  }
}

if (count >= n) {
  console.log('true');
} else {
  console.log('false');
}
