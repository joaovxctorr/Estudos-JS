// Date objects = objects that contain values that represent dates and times
// These dates objects can be changed and formatted

// Date (Year, Month, Day, Hour, Minute, Second, Millisecond)

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minute);
console.log(second);

//date.setFullYear(x)
//date.setMonth(x)

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if (date2 > date1) {
  console.log("Happy new year 2024");
}

//
var data = new Date();
console.log(data); 
// Janeiro é 0, Fevereiro é 1, Março é 2, etc.
// Domingo é 0, Segunda é 1, Terça é 2, etc.

// Métodos de Date
data.getDate // retorna o dia do mês
data.getDay // retorna o dia da semana
data.getFullYear // retorna o ano
data.getHours // retorna a hora
data.getSeconds // retorna os segundos
data.getMilliseconds // retorna os milissegundos
data.getMinutes // retorna os minutos
data.getMonth // retorna o mês
data.getTime // retorna o timestamp
data.getTimezoneOffset // retorna o fuso horário em minutos

// Criacao de uma nova data
var newDate = new Date('2021-07-01');
console.log(newDate); // Thu Jul 01 2021 00:00:00 GMT-0300 (Brasilia Standard Time)

newDate.getDay();

var days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
var dayName = days[newDate.getDay()];
console.log(dayName); // Quinta
