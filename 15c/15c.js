import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

const formatDate = dayjs().subtract(1, 'month').format('MMMM D');
console.log(formatDate);