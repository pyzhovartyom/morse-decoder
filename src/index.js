const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = ``;
    for (let i = 0; i < expr.length; i++) {
        if (i % 10 === 9) {
        result += expr[i] + ' ';
        } else {
        result += expr[i];
        }
    }
    result = result.split(' ');
    result.pop();
    let resultNew = [];
    for (let i = 0; i < result.length; i++) {
        if (result[i] === '**********') {
            resultNew.push(' ');
        }
        for (let j = 0; j < result[i].length; j++) {
        if (result[i][j] === '0' && result[i][j + 1] !== '0') {
            resultNew.push(result[i].slice(j + 1))
            break
        } else if (result[i][0] === '1') {
          resultNew.push(result[i])
          break
        }
      } 
    }  
    for (let i = 0; i < resultNew.length; i++) {
        resultNew[i] = resultNew[i].match(/.{1,2}/g);
    }
    for (let i = 0; i < resultNew.length; i++) {
        for (let j = 0; j < resultNew[i].length; j++) {
        if (resultNew[i][j] === '10') {
            resultNew[i][j] = '.';
        } else if (resultNew[i][j] === '11') {
            resultNew[i][j] = '-';
        }  
        }
    }
    result = resultNew.map(item => item.join(''));
    resultNew = [];
    for (i = 0; i < result.length; i++) {
      if (result[i] === ' ') {
        resultNew.push(' ');
      } else if (MORSE_TABLE[result[i]]) {
        resultNew.push(MORSE_TABLE[result[i]])
      }
    }
    return resultNew.join('')
}
  
module.exports = {
    decode
}