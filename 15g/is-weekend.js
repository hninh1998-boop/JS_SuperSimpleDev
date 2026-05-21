import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export default function isWeekend(date) {
  if (date === 'Saturday' || date === 'Sunday') {
    console.log(dayjs());
  } else {
    console.log(false);
  }
}