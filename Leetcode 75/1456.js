const s = "abciiidef";
const k = 3;

const sArr = [];

for (let i = 0; i < s.length; i++) {
  sArr.push(s.charAt(i));
}

let count = 0;
let maxCount = 0;
let i = 0;
while (i < k) {
  if (
    sArr[i] == "a" ||
    sArr[i] == "e" ||
    sArr[i] == "i" ||
    sArr[i] == "o" ||
    sArr[i] == "u" ||
    sArr[i] == "A" ||
    sArr[i] == "E" ||
    sArr[i] == "I" ||
    sArr[i] == "O" ||
    sArr[i] == "U"
  ) {
    count++;
  }
  i++;
}

maxCount = count;
for (let i = k; i < sArr.length; i++) {
  if (
    sArr[i] == "a" ||
    sArr[i] == "e" ||
    sArr[i] == "i" ||
    sArr[i] == "o" ||
    sArr[i] == "u" ||
    sArr[i] == "A" ||
    sArr[i] == "E" ||
    sArr[i] == "I" ||
    sArr[i] == "O" ||
    sArr[i] == "U"
  ) {
    count++;
  }

  if (
    sArr[i - k] == "a" ||
    sArr[i - k] == "e" ||
    sArr[i - k] == "i" ||
    sArr[i - k] == "o" ||
    sArr[i - k] == "u" ||
    sArr[i - k] == "A" ||
    sArr[i - k] == "E" ||
    sArr[i - k] == "I" ||
    sArr[i - k] == "O" ||
    sArr[i - k] == "U"
  ) {
    count--;
  }

  if (count > maxCount) {
    maxCount = count;
  }
}

console.log(maxCount);
