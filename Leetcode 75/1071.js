const str1 = 'LEET';
const str2 = 'CODE';

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function dividesBoth(str1, str2) {
  const gcdValue = gcd(str1.length, str2.length);
  const substring = str1.substring(0, gcdValue);

  if (
    str1 === substring.repeat(str1.length / gcdValue) &&
    str2 === substring.repeat(str2.length / gcdValue)
  ) {
    return substring;
  } else {
    return '';
  }
}

function largestCommonSubstring(str1, str2) {
  let gcdValue = gcd(str1.length, str2.length);

  while (gcdValue > 0) {
    const commonSubstring = dividesBoth(str1, str2);
    if (commonSubstring !== '') {
      return commonSubstring;
    }
    gcdValue--;
  }
  return '';
}

const largestCommonSubstr = largestCommonSubstring(str1, str2);
console.log('Largest common substring:', largestCommonSubstr);

// const charArray1 = [];
// const charArray2 = [];

// const n1 = str1.length;
// const n2 = str2.length;

// let resArr = [];

// const maxN = Math.max(n1, n2);

// for (let i = 0; i < maxN; i++) {
//   if (i < n1) {
//     charArray1.push(str1.charAt(i));
//   }
//   if (i < n2) {
//     charArray2.push(str2.charAt(i));
//   }
// }
// charArray1.filter((char) => char !== '');
// charArray2.filter((char) => char !== '');

// if (n1 > n2) {
//   for (let i = 0; i < maxN; i++) {
//     for (let j = 0; j < maxN; j++) {
//       if (str1[i] === str2[j]) {
//         resArr.push(str1.charAt(i));
//       }
//     }
//   }
// } else {
//   for (let i = 0; i < maxN; i++) {
//     for (let j = 0; j < maxN; j++) {
//       if (str2[i] === str1[j]) {
//         resArr.push(str2.charAt(i));
//       }
//     }
//   }
// }

// const finalRes = resArr.filter((char, index) => resArr.indexOf(char) === index);

// if (finalRes.length <= 1) {
//   finalRes.pop();
// }
