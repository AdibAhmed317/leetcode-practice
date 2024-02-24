const s = 'this is a test string  ';
const word = s.split(' ');
const charArr = [];

for (let i = 0; i < word.length; i++) {
  if (word[i] !== '') {
    charArr.push(word[i]);
  }
}

return charArr.reverse();
