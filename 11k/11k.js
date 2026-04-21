const array1 = [1,-3,5];
const array2 = [-2,3,-5,7,10];

function countPositive(nums) {
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      count ++;
    }
  }

  return count;
}

const count1 = countPositive(array1);
const count2 = countPositive(array2);

console.log(count1);
console.log(count2);