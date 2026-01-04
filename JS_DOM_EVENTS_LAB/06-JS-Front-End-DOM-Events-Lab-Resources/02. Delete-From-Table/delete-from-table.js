function deleteByEmail() {
    const emailInputValue = document.querySelector('input[name="email"]').value;
    const emailTdEl = Array.from(document.querySelectorAll('tbody tr td:nth-child(2)'));
    const resultEl = document.getElementById('result');

    for (const e of emailTdEl) {
        if (e.textContent === emailInputValue) {
            e.parentNode.remove();
            resultEl.textContent = 'Deleted.';
            break;
        }
        else {
            resultEl.textContent = 'Not found.';
        }
    }

}
