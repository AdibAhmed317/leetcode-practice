const s = 'hello';
const charArr = [];
const revCharArr = [];

for (let i = 0; i < s.length; i++) {
  charArr.push(s.charAt(i));
}

for (let i = 0; i < charArr.length; i++) {
  if (
    charArr[i] === 'a' ||
    charArr[i] === 'e' ||
    charArr[i] === 'i' ||
    charArr[i] === 'o' ||
    charArr[i] === 'u' ||
    charArr[i] === 'A' ||
    charArr[i] === 'E' ||
    charArr[i] === 'I' ||
    charArr[i] === 'O' ||
    charArr[i] === 'U'
  ) {
    revCharArr.push(charArr[i]);
    charArr[i] = '';
  }
}

revCharArr.reverse();

for (let i = 0; i < charArr.length; i++) {
  if (charArr[i] === '') {
    charArr[i] = revCharArr.shift();
  }
}

return charArr.join('');
