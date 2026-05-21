import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

const today = dayjs();
const calculateDate = today.add(1, 'month');
const formatDate = calculateDate.format('MMMM D');
console.log(formatDate);