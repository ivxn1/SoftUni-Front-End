function numCooking(num, ...operators) {
    let number = Number(num);

    for (let i = 0; i<operators.length; i++) {
        switch (operators[i]) {
            case 'chop': number /= 2 ; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number++; break;
            case 'bake': number*=3; break;
            case 'fillet': number -= number * 0.2;
        }
        console.log(number);
    }
}

numCooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
numCooking('9', 'dice', 'spice', 'chop', 'bake','fillet' );