const array1 = ['hello','world','search','good'];
const array2 = ['not','found'];

function checkSearch(array) {
  let num = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'search') {
      num = i;
    }
  }

  return num;
}

const num1 = checkSearch(array1);
const num2 = checkSearch(array2);

console.log(num1);
console.log(num2);