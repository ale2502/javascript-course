import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import isSatSun from './15f.js';


let date = dayjs();
console.log(isSatSun(date));

date = dayjs().add(5, 'days');
console.log(date.format('dddd'));
console.log(isSatSun(date));