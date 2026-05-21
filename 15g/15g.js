import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import isSatSun from './is-weekend.js';

const dayOfWeek = dayjs().format('dddd');
// const dayOfWeek = dayjs().add(5, 'days').format('dddd');

isSatSun(dayOfWeek);