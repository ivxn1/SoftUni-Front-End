document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const inputEl = document.getElementById('email');

    inputEl.addEventListener('change', () => {
            inputEl.classList.remove('error');
        const pattern = /([a-z]+)@([a-z]+).([a-z]+)/;
        if (!pattern.test(inputEl.value)) {
            inputEl.classList.add("error");
        }
    })
}
