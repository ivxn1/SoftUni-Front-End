document.addEventListener("DOMContentLoaded", focused);

function focused() {
    const inputEls = Array.from(
        document.querySelectorAll("body > main > div > input[type=text]")
    );
    inputEls.forEach((el) => {
        el.addEventListener("focus", (e) => {
            let divEl = e.target.parentNode;
            divEl.classList.add("focused");
        });
    });


    inputEls.forEach((el) => {
        el.addEventListener("blur", (e) => {
            let divEl = e.target.parentNode;
            divEl.classList.remove("focused");
        });
    });
}
