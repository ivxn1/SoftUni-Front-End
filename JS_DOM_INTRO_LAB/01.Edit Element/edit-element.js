function editElement(htmlEl, match, replacer) {
    const textEl = htmlEl.textContent;

    const newText = textEl.replaceAll(match, replacer);
    
    htmlEl.textContent = newText;
}