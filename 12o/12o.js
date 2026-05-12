foods1 = ['egg', 'apple', 'egg', 'egg', 'ham'];

function removeEgg(foods) {
  let newFoods = [];
  let count = 0;

  foods.filter((value, index) => {
    if (value === 'egg' && count < 2) {
      count++
    } else {
      newFoods.push(value);
    }
  });
  return newFoods;
}

console.log(removeEgg(foods1));