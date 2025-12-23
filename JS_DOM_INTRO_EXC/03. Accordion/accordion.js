function toggle() {
    const moreBtn = document.querySelector('div#accordion span.button');
    const extraText = document.querySelector('div#extra');

    if (extraText.style.display === 'none') {
        moreBtn.textContent = 'Less';
        extraText.style.display = 'block';
    }
    else {
        moreBtn.textContent = 'More';
        extraText.style.display = 'none';
    }
}