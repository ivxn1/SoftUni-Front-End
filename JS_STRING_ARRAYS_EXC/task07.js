/**
 * 
 * @param {string} word 
 * @param {string} text 
 */

function stringSubstring(word, text) {
    pattern = new RegExp(`\\b${word}\\b`, 'i');
    if (pattern.test(text)) {
        console.log(word);
        
    }
    else {
        console.log(word + ' not found!');
    }
    
}

stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');