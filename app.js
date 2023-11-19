const Buffer = require('buffer').Buffer;
const buffer = 
[
[ 84, 4 ],
[ 67, 4 ],
[ 54, 4, 56, 4, 66, 4, 66, 4, 86, 4 ],
[ 59, 4, 78, 4, 52, 4, 56, 4, 61, 4, 56, 4],
[ 64, 4, 62, 4, 55, 4, 67, 4, 60, 4, 61, 4, 62, 4, 87, 4 ],
[ 18, 4, 56, 4, 50, 4, 71, 4, 53, 4, 61, 4, 61, 4, 79, 4 ],
[ 61, 4, 48, 4, 52, 4, 55, 4, 50, 4, 56, 4, 71, 4, 48,
4, 57, 4, 61, 4, 62, 4],
[ 63, 4, 64, 4, 62, 4, 51, 4, 64, 4, 48, 4, 60, 4, 67, 4, 50, 4,
48, 4, 61, 4, 61, 4, 79, 4 ],
[ 50, 4, 48, 4, 54, 4, 59, 4, 56, 4, 50, 4, 56, 4, 60, 4 ]
];

// 1. Створити з даних цих масивів масив буферів різного розміру.
const bufferarray = buffer.map(buffer => Buffer.from(buffer));
console.log(bufferarray);
// 2. Визначити вірне кодування для кожного буферу (лише два варіанти, див.Вище)
const findencoding = bufferarray.map(buffer => buffer.includes(0) ? 'utf8' : 'utf16le');
console.log(findencoding);
// 3. Перекодувати кожен буфер у читабельну стрічку, яка є словом.

// Функція для перекодування буфера в читабельний рядок
function decodeBuffer(buffer, encoding) {
    return Buffer.from(buffer).toString(encoding);
  }
  const decodedwords = bufferarray.map((buffer, index) => decodeBuffer(buffer, findencoding[index]));
console.log(decodedwords);

// 4. Вивести у консоль отримані слова у логічному порядку щоб скласти таємне посилання від викладача до студентів.
const groupedSentences = decodedwords[5].concat(' ', decodedwords[7]).concat(' ',decodedwords[0]).concat(' ',decodedwords[6])
.concat(' ',decodedwords[8]).concat(' ',decodedwords[1]).concat(' ',decodedwords[2]).concat(' ',decodedwords[4])
.concat(' ',decodedwords[3])
console.log(groupedSentences);