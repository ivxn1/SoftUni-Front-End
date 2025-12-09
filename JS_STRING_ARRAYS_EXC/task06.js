/**
 * 
 * @param {string} text 
 */

function hashtag(text) {
    template = /\#(?<word>[a-zA-Z]+)\b/g
    matches = text.matchAll(template);

    for (let match of matches) {
        console.log(match.groups.word);
    }
    
}

hashtag('Nowadays everyone uses # to tag a #special word in #socialMedia');
hashtag('The symbol # is known #vario_usly in English-speaking #regions as the #number sign');
