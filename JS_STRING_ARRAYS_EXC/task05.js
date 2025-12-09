/**
 * 
 * @param {string} wordsToReveal 
 * @param {string} text 
 */

function revealWords(wordsToReveal, text) {
    words_arr = wordsToReveal.split(', ');
    for (let word of words_arr) {
        const template = new RegExp(`(?<!\\*)\\*{${word.length}}(?!\\*)`);
        text = text.replace(template, word);
    }
    console.log(text);
    
}

revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');