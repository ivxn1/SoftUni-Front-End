function countStringOccurences(text, wordToSearch) {
    filtered_arr = text.split(' ').filter(word => word === wordToSearch);
    console.log(filtered_arr.length);
    
}

countStringOccurences('This is a word and it also is a sentence', 'is');
countStringOccurences('softuni is great place for learning new programming languages','softuni');