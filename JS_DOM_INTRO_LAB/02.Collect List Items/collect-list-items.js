function extractText() {
    const textArea = document.querySelector("textarea#result")
    const liItems = document.querySelectorAll("ul#items > li");
    
    for (const i of liItems) {
        textArea.value += i.textContent + "\n";
    }
    
}