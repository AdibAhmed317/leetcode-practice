//88. Merge sorted array

var merge = function (nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;

  let i = m + n - 1;

  while (second >= 0) {
    let firstValue = nums1[first];
    let secondValue = nums2[second];

    if (firstValue > secondValue) {
      nums1[i] = firstValue;
      i--;
      first--;
    } else {
      nums1[i] = secondValue;
      i--;
      second--;
    }
  }
};

let nums1 = [1, 3, 5, 0, 0, 0];
let nums2 = [2, 4, 6];
let m = 3;
let n = 3;

merge(nums1, m, nums2, n);

console.log(nums1);
