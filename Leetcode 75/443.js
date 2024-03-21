// 443. String Compression

const chars = ["a", "a", "b", "b", "c", "c", "c"];
let i = 0;
let len = 0;

while (i < chars.length) {
  let currentChar = chars[i];
  chars[len++] = currentChar;

  let count = 0;
  while (i < chars.length && currentChar == chars[i]) {
    count++;
    i++;
  }
  if (count > 1) {
    count = count.toString().split();
    for (let c of count) {
      chars[len++] = c;
    }
  }
}

console.log(chars);
