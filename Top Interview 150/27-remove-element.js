//27. Remove element from array

var removeElement = function (nums, val) {
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      k++;
    }
  }
};

let k = 0;
nums = [3, 2, 2, 3];
val = 3;

removeElement(nums, val);

console.log(val);
console.log(nums);
console.log(k);

//Return K value
//Return first K number of value from nums
