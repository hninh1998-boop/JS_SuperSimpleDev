const array1 = [1, 2, 3];
const array2 = [-2, -1, 0, 99];

function addOne(array) {
  let result = array;

  for (let i = 0; i < result.length; i ++) {
    result[i]++;
  }
  return result;
}
result1 = addOne(array1);
result2 = addOne(array2);

console.log(result1);
console.log(result2);