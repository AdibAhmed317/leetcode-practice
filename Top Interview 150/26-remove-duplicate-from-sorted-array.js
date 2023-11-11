//26. Remove Duplicate from Sorted Array

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = nums.length; j >= i + 1; j--) {
      if (nums[i] == nums[j]) {
        nums.splice(i, 1);
      }
    }
  }
};

nums = [1, 1, 2];

removeDuplicates(nums);

console.log(nums);
