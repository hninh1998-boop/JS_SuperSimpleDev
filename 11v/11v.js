for (let i = 1; i <= 20; i++) {
  let fizzBuzz = '';
  fizzBuzz = i;

  if (i % 3 === 0 && i % 5 === 0) {
    fizzBuzz = 'FizzBuzz';
    console.log(fizzBuzz);
    continue;
  }

  if (i % 3 === 0) {
    fizzBuzz = 'Fizz';
  } else if ( i % 5 === 0) {
    fizzBuzz = 'Buzz';
  }

  console.log(fizzBuzz);
}