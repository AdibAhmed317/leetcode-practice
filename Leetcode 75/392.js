const s = "abc";
const t = "ahbgdc";
const sArr = [];
const tArr = [];

for (let i = 0; i < s.length; i++) {
  sArr.push(s.charAt(i));
}

for (let i = 0; i < t.length; i++) {
  tArr.push(t.charAt(i));
}

let sIndex = 0;
let tIndex = 0;

while (sIndex < s.length && tIndex < t.length) {
  if (s[sIndex] === t[tIndex]) {
    sIndex++;
  }

  tIndex++;
}

return sIndex === s.length;
