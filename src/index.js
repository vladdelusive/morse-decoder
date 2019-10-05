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
    let result = "";
    for(let i = 0; i < expr.length; i+=10) {
        let decodedString = "";
        let letter = expr.substr(i, 10);
        for(let j = 0; j < 9; j++ ) {
            let letterCompare = letter[j] + letter[j + 1];
            if(letter[j] == "*"){
                result += " ";
                j = 9;
            } else if(letterCompare == "10") {
                decodedString += ".";
                j++;
            } else if(letterCompare == "11") {
                decodedString += "-";
                j++;
            }
        }
        if(decodedString) result += MORSE_TABLE[decodedString];
    }
    return result;
}

module.exports = {
    decode
} 