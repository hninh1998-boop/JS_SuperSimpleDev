import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

// const dayOfWeek = dayjs().add(5, 'days').format('dddd');
// console.log(dayOfWeek);

const dayOfWeek = dayjs().format('dddd');

function isWeekend(date) {
  if (date === 'Saturday' || date === 'Sunday') {
    console.log(dayjs());
  } else {
    console.log(false);
  }
}

isWeekend(dayOfWeek);