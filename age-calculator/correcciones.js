//
// let diaCalcular = new Date('1963/8/27');
// let hoy = new Date();

// console.log(diaCalcular.getDate());
// console.log(diaCalcular.getMonth()+1);
// console.log(diaCalcular.getFullYear());
// console.log(hoy.getDate());
// console.log(hoy.getMonth()+1);
// console.log(hoy.getFullYear());

// let calculaAnyo = hoy.getFullYear() - diaCalcular.getFullYear();

// console.log(calculaAnyo);

function getDateDiff(startDate,endDate) {

const start = new Date(startDate);
const end = new Date(endDate);
const diff = end - start;
const years = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
const months = Math.floor((diff / 1000 /60 / 60 / 24) % 365 / 30.44);
const days = Math.floor((diff / 1000 / 60 / 60 / 24) % 365 % 30.44);

return {years: years, months: months, days: days};
}

// Ejemplo de uso
const startDate = '1963-08-27';

const endDate = '2023-06-07';

const diff = getDateDiff(startDate, endDate);
console.log(diff);// {years:1, months: 3, days: 8}
console.log(diff.years); // 1
console.log(diff.months);// 3
console.log(diff.days); // 8



