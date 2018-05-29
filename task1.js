/* Task 1

    Написать функцию, возвращающую YES, если входная строка является палиндромом и NO в противном случае.
      На вход подается строка ASCII символов длины n. 1 <= n <= 10000
    Пример
    
    > node task.rb 'Was it a car or a cat I saw?'
    > YES
*/

process.stdout.write( palindrome( process.argv.pop() ) );

function palindrome (str) {
  const reg       = /[^\d\wа-яё]/g,
        clearStr  = str.toLowerCase().replace(reg, '');
  
  for (
        let i       = 0,
            length  = clearStr.length - 1;
        i < length;
        i++
  ) {
    
    if (clearStr[i] !== clearStr[length - i]) {
      return 'NO'
    }
    
  }
  
  return 'YES';
}
