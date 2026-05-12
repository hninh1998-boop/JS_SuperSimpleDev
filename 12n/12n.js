const foods1 = ['egg','apple','egg','egg','ham'];

function removeEgg(foods) {
  let newFoods = [];
  foods.filter((value, index) => {
    if (value !== 'egg') {
      newFoods.push(value);
    }
  });
  return newFoods;
}

console.log(removeEgg(foods1));