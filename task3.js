/* Task 3
    Сложить 2 временных промежутка и вывести общую длительность в человекочитаемом виде.
    В выводе использовать часы, минуты и секунды (при необходимости).
    На вход подается два числа t1 и t2, разделенные пробелом. 1 <= t1, t2 <= 100000
    Пример
    
    > node task.js 1 1
    > 2 секунды
    
    > node task.js 3600 3599
    > 1 час 59 минут 59 секунд
*/

let   t1 = process.argv.pop(),
      t2 = process.argv.pop();

process.stdout.write( calc( t1, t2 ) );

function calc(time1, time2) {
  let date    = new Date((Number(time1) + Number(time2)) * 1000);
  
  let hour    = +date.getUTCHours(),
      minutes = +date.getMinutes(),
      seconds = +date.getSeconds(),
      res     = '';
    
  if (hour) {
    res += `${hour} ${getEnding(hour, ['час', 'часа', 'часов'])} `
  }
  if (minutes) {
    res += `${minutes} ${getEnding(minutes, ['минута', 'минуты', 'минут'])} `
  }
  if (seconds) {
    res += `${seconds} ${getEnding(seconds, ['секунда', 'секунды', 'секунд'])}`
  }
  
  return res;
}

function getEnding(num, worlds) {
  return worlds[((num%100 > 10 && num%100 < 15) || num%10 > 4 || num%10 == 0)? 2 : (num%10 == 1)? 0 : 1];
}