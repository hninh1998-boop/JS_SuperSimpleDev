const array11 = [1,1,2];
const array12 = [1,1,3];
const array21 = [1,2,3];
const array22 = [4,5,6];

function addArrays(array1,array2) {
  let result = [];

  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i] + array2[i]);    
  }

  return result;
}

const result1 = addArrays(array11, array12);
const result2 = addArrays(array21, array22);

console.log(result1);
console.log(result2);