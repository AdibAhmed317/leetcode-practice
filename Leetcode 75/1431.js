const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

let newCandiesArr = [];

let greateCandie = Math.max(...candies);

for (let i = 0; i < candies.length; i++) {
  if (candies[i] + extraCandies >= greateCandie) {
    newCandiesArr.push(true);
  } else {
    newCandiesArr.push(false);
  }
}

return newCandiesArr;
