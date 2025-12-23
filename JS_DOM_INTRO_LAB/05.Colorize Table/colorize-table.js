function colorize() {
    const evenLiItems = document.querySelectorAll('tbody > tr:nth-child(even)');

    for (const i of Array.from(evenLiItems)) {
        i.style.backgroundColor = 'teal';
    }
}