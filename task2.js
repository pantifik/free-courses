/* Task 2
    Рассчитать количество дней до нового года.
    На вход поадется дата в формате d m y
    1 <= d <= 31
    m in [января февраля марта апреля мая июня июля августа сентября октября ноября декабря]
    1 <= y <= 2999
    Пример
    
    > node task.js 4 июля 2018
    > 180
*/
let   year      = process.argv.pop(),
      monthName = process.argv.pop(),
      day       = process.argv.pop();

process.stdout.write( calcDay( day, monthName, year ) );



function calcDay(day, month, year) {
  const MONTHS =  [
                    'января',
                    'февраля',
                    'марта',
                    'апреля',
                    'мая',
                    'июня',
                    'июля',
                    'августа',
                    'сентября',
                    'октября',
                    'ноября',
                    'декабря'
                  ];
  const NEW_YEAR = new Date(year, 11, 31);
  
  for (let key in MONTHS) {
    if (MONTHS[key] === month) {
      return `${(NEW_YEAR - new Date(year, key, day)) / 86400000}`;
    }
  }
  
  return ``;
}