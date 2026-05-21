
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

const today = dayjs();
const calculationDate = today.add(5, 'days');
const formatDate = calculationDate.format('MMMM D');
console.log(formatDate);