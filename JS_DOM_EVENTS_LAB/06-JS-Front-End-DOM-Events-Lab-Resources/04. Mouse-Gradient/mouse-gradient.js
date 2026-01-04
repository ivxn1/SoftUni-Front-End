function attachGradientEvents() {
    const gradientCont = document.getElementById('gradient');
    const resultCont = document.getElementById("result");

    gradientCont.addEventListener('mousemove', (e) => {
        let mouseCoordinates = e.offsetX;
        let contWidth = gradientCont.clientWidth;
        let percentage = (mouseCoordinates/contWidth) * 100;
        resultCont.textContent = Math.floor(percentage) + '%';
    })
}


