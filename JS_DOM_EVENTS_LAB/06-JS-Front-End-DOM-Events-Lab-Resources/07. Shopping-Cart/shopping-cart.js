document.addEventListener("DOMContentLoaded", solve);

function solve() {
    const addBtns = document.querySelectorAll(
        "body > div.shopping-cart > div.product > div.product-add > button"
    );
    const textareaEl = document.querySelector("textarea");
    const checkoutBtn = document.querySelector("body > div > button");
    let isDisabled = false;

    addBtns.forEach((b) => {
        b.addEventListener("click", (e) => {
            if (!isDisabled) {
                const prodDiv = e.target.parentNode.parentNode;
                const prodDet = prodDiv.querySelector(".product-details");
                const prodName =
                    prodDet.querySelector(".product-title").textContent;
                const prodPrice = Number(
                    prodDiv.querySelector(".product-line-price").textContent
                );

                const res = `Added ${prodName} for ${prodPrice.toFixed(2)} to the cart.\n`;
                textareaEl.value += res;
            }
        });
    });

    checkoutBtn.addEventListener("click", () => {
        let items = textareaEl.value.trim().split("\n");
        
   
        let totalPrice = 0;
        let products = [];
        items.forEach((i) => {
            const iSplit = i.split(" ");
            const price = Number(iSplit[3]);
            totalPrice += price;
            products.push(iSplit[1]);
        });
        textareaEl.value += `You bought ${products.join(
            ", "
        )} for ${totalPrice.toFixed(2)}`;
        isDisabled = true;
        checkoutBtn.disabled = true;
    });
}
