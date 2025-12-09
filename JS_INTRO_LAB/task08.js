function circleArea(arg) {
    argType = typeof arg;
    if (argType === 'number') {
        area = Math.PI * arg ** 2;
        console.log(area.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${argType}.`);
        
    }
}

circleArea(5);
circleArea('ivan')