//Merge Strings Alternately

var mergeAlternately = function (word1, word2) {
  const n1 = word1.length;
  const n2 = word2.length;
  const maxN = Math.max(n1, n2);
  const charArray = [];

  for (let i = 0; i < maxN; i++) {
    if (i < n1) {
      charArray.push(word1.charAt(i));
    }
    if (i < n2) {
      charArray.push(word2.charAt(i));
    }
  }
  return charArray.join('');
};

mergeAlternately('abc', 'pqrs');
