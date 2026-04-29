const food1 = ['egg','apple','egg','harm','egg'];

function removeEgg(foods) {
  let foodReturn = [];

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] !== 'egg') {
      foodReturn.push(foods[i]);
    }
  }

  return foodReturn;
}

const foodReturn1 = removeEgg(food1);
console.log(foodReturn1);