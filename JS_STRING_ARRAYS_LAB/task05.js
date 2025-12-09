function censoredWords(text, word) {
    new_text = text.replaceAll(word, '*'.repeat(word.length));
    console.log(new_text);
    
}

censoredWords('A small sentence with some words', 'small');
censoredWords('Find the hidden word', 'hidden');