// 2215. Find the Difference of Two Arrays

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];

function findDifference(nums1) {
  let map1 = new Map();
  let map2 = new Map();

  nums1.forEach((element) => {
    map1.set(element, true);
  });

  nums2.forEach((element) => {
    map2.set(element, true);
  });

  let uniqueNums1 = [];
  map1.forEach((_, key) => {
    if (!map2.has(key)) {
      uniqueNums1.push(key);
    }
  });

  let uniqueNums2 = [];
  map2.forEach((_, key) => {
    if (!map1.has(key)) {
      uniqueNums2.push(key);
    }
  });

  return [uniqueNums1, uniqueNums2];
}

console.log(findDifference(nums1, nums2));
