const array1 = [1,20,33,24,5];
const array2 = ['hi','hello','good'];

function getLastValue(array) {
  const lastIndex = array.length - 1;
  const result = array[lastIndex];

  return result;
}

const result1 = getLastValue(array1);
const result2 = getLastValue(array2);
console.log(result1);
console.log(result2);