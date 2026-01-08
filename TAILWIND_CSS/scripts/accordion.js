function toggleAccordionOption(button) {
    const details = button.nextElementSibling
    const btnSvg = button.getElementsByTagName("svg")[0]
    btnSvg.classList.toggle("rotate-180")

    if (details.style.height && details.style.height !== "0px") {
    // Closing
    details.style.height = details.scrollHeight + "px"; // start from current height
    requestAnimationFrame(() => {
      details.style.height = "0px";
    })
  } else {
    // Opening
    details.style.height = details.scrollHeight + "px";

  }

}



