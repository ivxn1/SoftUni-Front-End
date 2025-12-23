function extract(content) {
    const textEl = document.getElementById(content);

    const text = textEl.textContent
                    .match(/\(([^)]+)\)/g)
                    .join('; ');
    return text;
}