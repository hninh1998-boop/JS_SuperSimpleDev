const array1 = ['hello','world','search','good'];
const array2 = ['not','found'];
const array3 = ['hello','world','search','good', 'search'];

function checkSearch(array) {
  let num = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'search') {
      num = i;
      break;
    }
  }

  return num;
}

const num1 = checkSearch(array1);
const num2 = checkSearch(array2);
const num3 = checkSearch(array3);

console.log(num1);
console.log(num2);
console.log(num3);