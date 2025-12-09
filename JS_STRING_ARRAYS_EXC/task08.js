/**
 * 
 * @param {string} text 
 */

function pascalCaseSplitter(text) {
    const pattern = /[A-z]{1}[a-z]*/g;
    matches = Array.from(text.matchAll(pattern));
    console.log(matches.join(', '));
    
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo')